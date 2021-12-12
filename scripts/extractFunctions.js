// node scripts/extractFunctions.js E:\SteamLibrary\steamapps\common\H2EK\hs_doc.txt

const fs = require("fs");
const Path = require("path");

console.log("Extracting functions definitions");

const pathToFile = process.argv[2];

console.log(pathToFile);

const file = fs.readFileSync(pathToFile, "utf8");

// Extracting each lines of the document and removing any empty lines
const lines = file.split("\n").map(line => line.trim()).filter(line => line);

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

// Extracting all types from the ValueTypes.ts file
const types = fs.readFileSync(Path.join(process.cwd(), "src/types/value-type/ValueType.ts"), "utf8").split("\n").map(line => line.trim()).filter(line => line)
  .map(line => line.replace("|", "").replace(";", "").replace("'", "").replace("'", "").replace('"', "").replace('"', "").trim());

types.splice(0, 1);
types.splice(-1, 1);

// List of common functions thqt don't need to be extracted
const commonFunctions = [
  "begin", "begin_random", "if", "cond", "set", "and", "or", "+", "-", "*", "/", "min", "max", "=", "!=", "sleep", "sleep_for_ticks", "sleep_forever", "sleep_until", "wake", "not", "print", "<", "<=", ">", ">="
];

const isArg = arg => arg.startsWith("<") && arg.endsWith(">")
const getArgType = arg => {
  if (arg.includes("number")) return ["real", "short", "long"];
  return arg.substring(1, arg.length - 1);
}

functionClusters.slice(15, 35).forEach(cluster => {
  const func = cluster[0].substring(1, cluster[0].length - 1);
  const decomposedFunction = func.split(" ");
  
  let returnType;
  if (isArg(decomposedFunction[0])) {
    returnType = getArgType(decomposedFunction[0]);
  }
  
  const functionName = decomposedFunction[returnType ? 1 : 0];

  if(commonFunctions.includes(functionName)) return;
  
  console.log(decomposedFunction)
  console.log(functionName)
  
  const args = decomposedFunction.slice(returnType ? 2 : 1).map(arg => getArgType(arg))
  console.log(args)

  console.log("\n")

})