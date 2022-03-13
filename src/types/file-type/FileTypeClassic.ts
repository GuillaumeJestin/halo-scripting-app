import FileTypeMacro from "./FileTypeMacro";
import FileType_Base from "./FileType_Base";

type FileTypeClassic = FileType_Base & {
  macros: FileTypeMacro[];
  type?: undefined;
};

export default FileTypeClassic;