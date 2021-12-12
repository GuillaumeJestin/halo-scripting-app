import FunctionType from "../../types/function-type/FunctionType";

const CommonFunctions: FunctionType[] = [
  {
    symbol: '+',
    name: 'addition',
    description: <p>Returns the sum of all specified expressions.</p>,
    arguments: [["real", "short", "long"], ["real", "short", "long"]],
    additionalArguments: ["real", "short", "long"],
    returns: "real"
  },
  {
    symbol: '-',
    name: 'substraction',
    description: <p>Returns the difference of two expressions.</p>,
    arguments: [["real", "short", "long"], ["real", "short", "long"]],
    additionalArguments: ["real", "short", "long"],
    returns: "real"
  },
];

export default CommonFunctions;