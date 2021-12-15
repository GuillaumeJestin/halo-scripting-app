// node scripts/extractFunctions.js E:\SteamLibrary\steamapps\common

const fs = require("fs");
const Path = require("path");
const prompt = require('prompt');
const stringifyObject = require('stringify-object');
const LocalStorage = require('node-localstorage').LocalStorage;
const _ = require('lodash');

const myLocalStorage = new LocalStorage('./_localstorage');

console.log("Extracting functions definitions");

const parsedFunctions = {};

const mainPath = process.argv[2];

// Extracting all types from the ValueTypes.ts file
const types = fs.readFileSync(Path.join(process.cwd(), "src/types/value-type/ValueType.ts"), "utf8").split("\n").map(line => line.trim()).filter(line => line)
  .map(line => line.replace("|", "").replace(";", "").replace("'", "").replace("'", "").replace('"', "").replace('"', "").trim());

types.splice(0, 1);
types.splice(-1, 1);

prompt.start();

const extractFunctions = async (pathToFile, game) => {
  console.log(pathToFile);

  const file = fs.readFileSync(pathToFile, "utf8");

  // Extracting each lines of the document and removing any empty lines
  const lines = file.split("\n").map(line => line.trim()).filter(line => line && line !== "; AVAILABLE FUNCTIONS:");

  let functionClusters = [];

  let accumulator = [];

  for (const line of lines) {
    // Checking this line is the start of a new cluster
    if (line.startsWith("(") && line.endsWith(")")) {
      functionClusters.push(accumulator);
      accumulator = [];
    }
    accumulator.push(line);
  }

  // Removing any potential empty clusters
  functionClusters = functionClusters.filter(func => func.length);

  // List of common functions thqt don't need to be extracted
  const commonFunctions = [
    "begin", "begin_random", "if", "cond", "set", "sleep", "sleep_for_ticks", "sleep_forever", "sleep_until", "wake", "inspect"
  ];

  // Problematic functions to parse, better to do them by hand
  const problematicFunctions = ["approach"];

  const isArg = arg => arg.startsWith("<") && arg.endsWith(">");
  const isOptional = arg => arg.startsWith("[") && arg.endsWith("]");
  const isMultiple = arg => arg.endsWith("(s)>");
  const getArgType = arg => {
    if (arg.includes("number")) return ["real", "short", "long"];
    return arg.substring(1, arg.length - 1).replace("(s)", "");
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const localParsedFunctions = [];

  for (const cluster of functionClusters) {
    const func = cluster[0].substring(1, cluster[0].length - 1);
    const decomposedFunction = func
      .replaceAll("point reference", "point_reference")
      .replaceAll("render model", "render_model")
      .replaceAll("any tag not resolving", "any_tag_not_resolving")
      .replaceAll("any tag", "any_tag")
      .replaceAll("cinematic scene definition", "cinematic_scene_definition")
      .replaceAll("cinematic definition", "cinematic_definition")
      .replaceAll("button preset", "button_preset")
      .replaceAll("joystick preset", "joystick_preset")
      .replaceAll("player color", "player_color")
      .replaceAll("player character type", "player_character_type")
      .replaceAll("voice output setting", "voice_output_setting")
      .replaceAll("voice mask", "voice_mask")
      .replaceAll("subtitle setting", "subtitle_setting")
      .replaceAll("bink definition", "bink_definition")
      .replaceAll("animation budget reference", "animation_budget_reference")
      .replaceAll("looping sound budget reference", "looping_sound_budget_reference")
      .replaceAll("sound budget reference", "sound_budget_reference")
      .split(" ")
      .map(a => a
        .replaceAll("render_model", "render model")
        .replaceAll("any_tag_not_resolving", "any tag not resolving")
        .replaceAll("any_tag", "any tag")
        .replaceAll("cinematic_scene_definition", "cinematic scene definition")
        .replaceAll("cinematic_definition", "cinematic definition")
        .replaceAll("button_preset", "button preset")
        .replaceAll("joystick_preset", "joystick preset")
        .replaceAll("player_color", "player color")
        .replaceAll("player_character_type", "player character type")
        .replaceAll("voice_output_setting", "voice output setting")
        .replaceAll("voice_mask", "voice mask")
        .replaceAll("subtitle_setting", "subtitle setting")
        .replaceAll("bink_definition", "bink definition")
        .replaceAll("animation_budget_reference", "animation budget reference")
        .replaceAll("looping_sound_budget_reference", "looping sound budget reference")
        .replaceAll("sound_budget_reference", "sound budget reference")
      );

    let returnType;
    if (isArg(decomposedFunction[0])) {
      returnType = getArgType(decomposedFunction[0]);
    }

    const functionName = decomposedFunction[returnType ? 1 : 0];

    if (commonFunctions.includes(functionName) || problematicFunctions.includes(functionName)) continue;

    const otherArgs = decomposedFunction.slice(returnType ? 2 : 1);

    const args = [];
    const multipleArgs = [];
    let optionalArg;

    otherArgs.forEach(arg => {
      if (isOptional(arg)) {
        optionalArg = getArgType(arg.substring(1, arg.length - 1));
      } else if (isMultiple(arg)) {
        multipleArgs.push(getArgType(arg));
      } else {
        args.push(getArgType(arg));
      }
    });

    if (functionName === "=" || functionName === "!=") {
      args.forEach((arg, index) => { args[index] = "boolean" });
    }

    // Checking if all types exist
    if (
      (returnType && !types.includes(returnType)) ||
      (optionalArg && (Array.isArray(optionalArg) ? optionalArg.some(arg => !types.includes(arg)) : !types.includes(optionalArg))) ||
      (multipleArgs.some(arg => Array.isArray(arg) ? arg.some(arg => !types.includes(arg)) : !types.includes(arg))) ||
      (args.some(arg => Array.isArray(arg) ? arg.some(arg => !types.includes(arg)) : !types.includes(arg)))
    ) {
      console.log(game + " " + functionName + " type problem");
      console.log(cluster)
      console.log(args)
      continue;
    }

    // Since H3 doc doesnt give us any return type, we go see on the other games one to see if there's a match
    // Otherwise we do it manually :/
    if (!returnType && game === "h3") {
      const match = parsedFunctions.h2?.find(({ symbol }) => symbol === functionName);
      if (match) {
        returnType = match.returns;
      } else if (cluster[1]?.toLowerCase().includes("returns true")) {
        returnType = "boolean"
      } else if (myLocalStorage.getItem(game + functionName)) {
        returnType = myLocalStorage.getItem(game + functionName);
      } else if (cluster[1]?.includes("return")) {
        console.log(game + " " + functionName + " return problem");
        console.log(cluster);

        const { returnType: userReturnType } = await prompt.get(['returnType']);
        if (userReturnType && typeof userReturnType === "string" && types.includes(userReturnType)) {
          returnType = userReturnType;
        }

        myLocalStorage.setItem(game + functionName, userReturnType || "void");
      }
    }

    localParsedFunctions.push({
      symbol: functionName,
      name: functionName,
      ...(cluster[1] ? { description: capitalizeFirstLetter(cluster[1].startsWith(";") ? cluster[1].replace("; ", "") : cluster[1]) } : {}),
      arguments: args,
      ...(optionalArg ? { optionalArguments: optionalArg } : {}),
      ...(multipleArgs.length ? { additionalArguments: multipleArgs[0] } : {}),
      ...(returnType && returnType !== "void" ? { returns: returnType } : {}),
    });

  }

  parsedFunctions[game] = localParsedFunctions;
}

const checkForCommon = () => {
  const functionNames = _.uniq([...parsedFunctions.ce, ...parsedFunctions.h2, ...parsedFunctions.h3].map(o => o.name));

  const common = [];

  functionNames.forEach(functionName => {
    const ce = parsedFunctions.ce.find(o => o.name === functionName);
    const h2 = parsedFunctions.h2.find(o => o.name === functionName);
    const h3 = parsedFunctions.h3.find(o => o.name === functionName);

    if (ce && h2 && h3
      &&
      _.isEqual(_.omit(ce, ["description"]), _.omit(h2, ["description"])) &&
      _.isEqual(_.omit(ce, ["description"]), _.omit(h3, ["description"])) &&
      _.isEqual(_.omit(h3, ["description"]), _.omit(h2, ["description"]))
    ) {
      common.push(h3);

      _.remove(parsedFunctions.ce, o => o.name === functionName);
      _.remove(parsedFunctions.h2, o => o.name === functionName);
      _.remove(parsedFunctions.h3, o => o.name === functionName);
    }
  });

  parsedFunctions.common = common;
}

const printResult = (funcs, name, noCheck) => {
  fs.writeFileSync(Path.join(process.cwd(), "src/functions", name + ".tsx"),
    `${noCheck ? "// @ts-nocheck\n" : ""}import FunctionType from "../types/function-type/FunctionType";

const ${name}: FunctionType[] = ${stringifyObject(funcs, {
      indent: '\t',
      singleQuotes: false
    })};

export default ${name};
`
  );
}

(async () => {

  await extractFunctions(Path.join(mainPath, "HCEEK/hs_doc.txt"), "ce");
  await extractFunctions(Path.join(mainPath, "H2EK/hs_doc.txt"), "h2");
  await extractFunctions(Path.join(mainPath, "H3EK/hs_doc.txt"), "h3");

  checkForCommon();

  // Printing those functions :)
  printResult(parsedFunctions.ce, "HCEFunctions");
  printResult(parsedFunctions.h2, "H2Functions", true);
  printResult(parsedFunctions.h3, "H3Functions");
  printResult(parsedFunctions.common, "CommonFunctions");
})();