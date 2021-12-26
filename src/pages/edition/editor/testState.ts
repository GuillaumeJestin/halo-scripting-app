import NodeType from "../../../types/node-type/NodeType";

export default [
  {
    "id": "1",
    "type": "script",
    "data": {
      "name": "MyScript",
      "type": "startup"
    },
    "position": {
      "x": -350,
      "y": -250
    }
  },
  {
    "id": "100",
    "type": "script",
    "data": {
      "name": "Second",
      "type": "startup"
    },
    "position": {
      "x": -350,
      "y": 250
    }
  },
  {
    "id": "2",
    "type": "variable",
    "data": {
      "variableId": "a"
    },
    "position": {
      "x": -300,
      "y": -100
    }
  },
  {
    "id": "get_power",
    "type": "function",
    "data": {
      "function": "device_get_power",
      "category": "common"
    },
    "position": {
      "x": -50,
      "y": -150
    }
  },
  {
    "id": "5",
    "type": "function",
    "data": {
      "function": "+",
      "category": "common",
      "argumentsValue": [
        {
          "index": 0,
          "value": "66"
        }
      ]
    },
    "position": {
      "x": -50,
      "y": 0
    }
  },
  {
    "id": "6",
    "type": "variable",
    "data": {
      "variableId": "b"
    },
    "position": {
      "x": -350,
      "y": 100
    }
  },
  {
    "id": "7",
    "type": "variable",
    "data": {
      "variableId": "c"
    },
    "position": {
      "x": -70,
      "y": 300
    }
  },
  {
    "id": "8",
    "type": "function",
    "data": {
      "function": "player_camera_control",
      "category": "common"
    },
    "position": {
      "x": 150,
      "y": 200
    }
  },
  {
    "source": "1",
    "sourceHandle": "flow-output",
    "target": "get_power",
    "targetHandle": "flow-input",
    "id": "79d3d24b-c742-43de-82ce-602e931ba01f",
    "type": "flow"
  },
  {
    "source": "get_power",
    "sourceHandle": "flow-output",
    "target": "5",
    "targetHandle": "flow-input",
    "id": "b2141c5b-4dd3-48d5-a146-1feb0cde8766",
    "type": "flow"
  },
  {
    "source": "5",
    "sourceHandle": "flow-output",
    "target": "8",
    "targetHandle": "flow-input",
    "id": "9565e4e4-4395-43c7-823c-4020d54e08d4",
    "type": "flow"
  },
  {
    "source": "100",
    "sourceHandle": "flow-output",
    "target": "8",
    "targetHandle": "flow-input",
    "id": "18210acd-c585-4121-86fd-d0f2aa2dd362",
    "type": "flow"
  }
] as NodeType[]

// export default [
//   {
//     id: "1",
//     type: "script",
//     data: {
//       name: "MyScript",
//       type: "startup",
//     },
//     position: {
//       x: -350,
//       y: -250
//     }
//   },
//   {
//     id: "100",
//     type: "script",
//     data: {
//       name: "Second",
//       type: "startup",
//     },
//     position: {
//       x: -350,
//       y: 250
//     }
//   },
//   {
//     id: "2",
//     type: "variable",
//     data: {
//       variableId: "a"
//     },
//     position: {
//       x: -300,
//       y: -100
//     }
//   },
//   {
//     id: "get_power",
//     type: "function",
//     data: {
//       function: "device_get_power",
//       category: "common"
//     },
//     position: {
//       x: -50,
//       y: -150
//     }
//   },
//   // {
//   //   id: "4",
//   //   type: "setVariable",
//   //   position: {
//   //     x: 100,
//   //     y: -50
//   //   }
//   // },
//   {
//     id: "5",
//     type: "function",
//     data: {
//       function: "+",
//       category: "common",
//       argumentsValue: [
//         {
//           index: 0,
//           value: "66"
//         }
//       ]
//     },
//     position: {
//       x: -50,
//       y: 0
//     }
//   },
//   {
//     id: "6",
//     type: "variable",
//     data: {
//       variableId: "b"
//     },
//     position: {
//       x: -350,
//       y: 100
//     }
//   },
//   {
//     id: "7",
//     type: "variable",
//     data: {
//       variableId: "c",
//     },
//     position: {
//       x: -70,
//       y: 300
//     }
//   },
//   {
//     id: "8",
//     type: "function",
//     data: {
//       function: "player_camera_control",
//       category: "common",
//     },
//     position: {
//       x: 150,
//       y: 200
//     }
//   }
// ] as NodeType[]