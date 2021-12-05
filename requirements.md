## Nodes

- Function
- Script
- If
- Random Execution
- Wake
- Set Variable
- Variable
- Macro
- Start (Macro)
- End (Macro)
- Comment

## Function Types
- Name
- Description
- Arguments : Array of:
  - Type
  - Array of Type
  OR
  - Function (node): type | Array of type (ex: Min/Add: arguments based on other args int/real maybe ?)
- Optionnal Arguments: Array of indexes referencing Arguments array
- Additional args :
  - Type
  - Array of Type
  OR
  - Function (node): type | Array of type (ex: Min/Add: arguments based on other args int/real maybe ?)
- Returns : One of:
  - Type
  OR
  - Function (node): type (ex: Min/Add: arguments based on other args int/real maybe ?)

Categories:
  Commons
  Halo 1
  Halo 2
  Halo 3

## Function Node Specs
Path Output only showing if Path Input is Connected
If Path Input is deconnected, then deconnect all the next nodes



## Project hierarchy
src
  pages
    files
      FileDisplay
      FilesPage
    edition
      EditionPage
      tab-bar
        TabBar
      editor
        Editor
      side-bar
        variables
          Variables
        scripts
          Scripts
        functions
          Functions
        macros
          Macros
  common
    TextInput
    Checkbox
    ...
    DragAndDrop
  types
    nodes-types
      EdgeType
      FunctionNodeType
      ...
    types-types
      Types (int; boolean; ...)
    function-type
      FunctionType
  functions
    common
      ...
    halo-1
      ...
    halo-2
      ...
    halo-3
      ...