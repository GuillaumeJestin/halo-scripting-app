import NodeType from "../../../types/node-type/NodeType";

export default [
  {
    id: "1",
    type: "script",
    data: {
      name: "MyScript",
      type: "startup",
    },
    position: {
      x: -350,
      y: -250
    }
  },
  {
    id: "2",
    type: "variable",
    data: {
      variableId: "a"
    },
    position: {
      x: -300,
      y: -100
    }
  },
  {
    id: "get_power",
    type: "function",
    data: {
      function: "device_get_power",
      category: "common"
    },
    position: {
      x: -50,
      y: -150
    }
  },
  // {
  //   id: "4",
  //   type: "setVariable",
  //   position: {
  //     x: 100,
  //     y: -50
  //   }
  // },
  {
    id: "5",
    type: "function",
    data: {
      function: "+",
      category: "common",
      argumentsValue: [
        {
          index: 1,
          value: 66
        }
      ]
    },
    position: {
      x: -50,
      y: 0
    }
  },
  {
    id: "6",
    type: "variable",
    data: {
      variableId: "b"
    },
    position: {
      x: -350,
      y: 100
    }
  },
  {
    id: "7",
    type: "variable",
    data: {
      variableId: "c",
    },
    position: {
      x: -70,
      y: 300
    }
  },
  {
    id: "8",
    type: "function",
    data: {
      function: "player_camera_control",
      category: "common",
    },
    position: {
      x: 150,
      y: 200
    }
  },
  {
    id: "01e12a64-719e-42b8-a9a5-6e95bbd8df02",
    source: "6",
    sourceHandle: "variable-value",
    target: "get_power",
    targetHandle: "argument-0",
    type: "value"
  }
] as NodeType[]