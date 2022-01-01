import FunctionCategoryType from "../types/function-type/FunctionCategoryType";
import FunctionType from "../types/function-type/FunctionType";
import CommonFunctions from "./CommonFunctions";
import H2Functions from "./H2Functions";
import H3Functions from "./H3Functions";
import HCEFunctions from "./HCEFunctions";

const Functions: { [key in FunctionCategoryType]: FunctionType[] } = {
  common: CommonFunctions,
  hce: HCEFunctions,
  h2: H2Functions,
  h3: H3Functions,
};

export default Functions;