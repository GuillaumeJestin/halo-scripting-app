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
      "x": -250,
      "y": -250
    }
  },
  {
    "id": "2",
    "type": "variable",
    "data": {
      "name": "Device",
      "type": "device"
    },
    "position": {
      "x": -250,
      "y": -100
    }
  },
  {
    "id": "3",
    "type": "function",
    "data": {
      "function": "device_get_power"
    },
    "position": {
      "x": -50,
      "y": -150
    }
  },
  {
    "id": "4",
    "type": "setVariable",
    "position": {
      "x": 100,
      "y": -50
    }
  },
  {
    "id": "5",
    "type": "function",
    "data": {
      "function": "+",
      "argumentsValue": [
        {
          "index": 1,
          "value": 66
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
      "name": "My_number_var",
      "type": "real"
    },
    "position": {
      "x": -250,
      "y": 100
    }
  },
  {
    "id": "7",
    "type": "variable",
    "data": {
      "name": "TrueOrFalse",
      "type": "boolean"
    },
    "position": {
      "x": 0,
      "y": 250
    }
  },
  {
    "id": "8",
    "type": "function",
    "data": {
      "function": "player_camera_control"
    },
    "position": {
      "x": 150,
      "y": 150
    }
  }
] as NodeType[]