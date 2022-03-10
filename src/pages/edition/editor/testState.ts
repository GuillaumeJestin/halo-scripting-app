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
    id: "100",
    type: "script",
    data: {
      name: "Second",
      type: "startup",
    },
    position: {
      x: -350,
      y: 250
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
  {
    id: "4",
    type: "setVariable",
    position: {
      x: 350,
      y: 50
    }
  },
  {
    id: "5",
    type: "function",
    data: {
      function: "+",
      category: "common",
      argumentsValue: [
        {
          index: 0,
          value: "66"
        }
      ]
    },
    position: {
      x: 0,
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
  // {
  //   "source": "1",
  //   "sourceHandle": "flow-output",
  //   "target": "get_power",
  //   "targetHandle": "flow-input",
  //   "id": "02e1cf74-bf15-4aa2-bcb9-f82ef2e4a3e6",
  //   "type": "flow"
  // },
  // {
  //   "source": "get_power",
  //   "sourceHandle": "flow-output",
  //   "target": "5",
  //   "targetHandle": "flow-input",
  //   "id": "b611e233-745f-43c8-a08c-2ec40ade2f1d",
  //   "type": "flow"
  // },
  // {
  //   "source": "5",
  //   "sourceHandle": "flow-output",
  //   "target": "8",
  //   "targetHandle": "flow-input",
  //   "id": "07d1be68-6d97-4dc6-ada5-bb78b54503fc",
  //   "type": "flow"
  // }
] as NodeType[]