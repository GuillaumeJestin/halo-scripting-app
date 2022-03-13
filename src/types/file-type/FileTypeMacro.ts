import FileType_Base from "./FileType_Base";

export const FILE_TYPE_MACRO = "macro";

type FileTypeMacro = FileType_Base & {
  type: typeof FILE_TYPE_MACRO;
  parentFile: string;
};

export default FileTypeMacro;