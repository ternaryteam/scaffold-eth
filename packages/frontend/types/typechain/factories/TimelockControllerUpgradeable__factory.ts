/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TimelockControllerUpgradeable,
  TimelockControllerUpgradeableInterface,
} from "../TimelockControllerUpgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "CallExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "CallScheduled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "Cancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldDuration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    name: "MinDelayChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EXECUTOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROPOSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TIMELOCK_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperation",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperationBatch",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperation",
    outputs: [
      {
        internalType: "bool",
        name: "pending",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationDone",
    outputs: [
      {
        internalType: "bool",
        name: "done",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationPending",
    outputs: [
      {
        internalType: "bool",
        name: "pending",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationReady",
    outputs: [
      {
        internalType: "bool",
        name: "ready",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "schedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "scheduleBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "updateDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611fe3806100206000396000f3fe60806040526004361061018f5760003560e01c806364d62353116100d6578063b1c5f4271161007f578063d547741f11610059578063d547741f146104e4578063e38335e514610504578063f27a0c921461051757600080fd5b8063b1c5f42714610477578063c4d252f514610497578063d45c4435146104b757600080fd5b80638f61f4f5116100b05780638f61f4f5146103db57806391d148541461040f578063a217fddf1461046257600080fd5b806364d623531461037b5780638065657f1461039b5780638f2a0bb0146103bb57600080fd5b8063248a9ca31161013857806331d507501161011257806331d507501461031b57806336568abe1461033b578063584b153e1461035b57600080fd5b8063248a9ca31461029b5780632ab0f529146102cb5780632f2ff15d146102fb57600080fd5b80630d3cf6fc116101695780630d3cf6fc14610234578063134008d31461026857806313bc9f201461027b57600080fd5b806301d5062a1461019b57806301ffc9a7146101bd57806307bd0265146101f257600080fd5b3661019657005b600080fd5b3480156101a757600080fd5b506101bb6101b636600461183e565b61052c565b005b3480156101c957600080fd5b506101dd6101d8366004611a53565b6105c2565b60405190151581526020015b60405180910390f35b3480156101fe57600080fd5b506102267fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6381565b6040519081526020016101e9565b34801561024057600080fd5b506102267f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca581565b6101bb6102763660046117d2565b61065b565b34801561028757600080fd5b506101dd610296366004611a0e565b610716565b3480156102a757600080fd5b506102266102b6366004611a0e565b60009081526065602052604090206001015490565b3480156102d757600080fd5b506101dd6102e6366004611a0e565b60009081526097602052604090205460011490565b34801561030757600080fd5b506101bb610316366004611a27565b61073c565b34801561032757600080fd5b506101dd610336366004611a0e565b610767565b34801561034757600080fd5b506101bb610356366004611a27565b610780565b34801561036757600080fd5b506101dd610376366004611a0e565b61081e565b34801561038757600080fd5b506101bb610396366004611a0e565b610835565b3480156103a757600080fd5b506102266103b63660046117d2565b6108eb565b3480156103c757600080fd5b506101bb6103d636600461195c565b61092a565b3480156103e757600080fd5b506102267fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc181565b34801561041b57600080fd5b506101dd61042a366004611a27565b600091825260656020908152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205460ff1690565b34801561046e57600080fd5b50610226600081565b34801561048357600080fd5b506102266104923660046118b3565b610b29565b3480156104a357600080fd5b506101bb6104b2366004611a0e565b610b6e565b3480156104c357600080fd5b506102266104d2366004611a0e565b60009081526097602052604090205490565b3480156104f057600080fd5b506101bb6104ff366004611a27565b610c50565b6101bb6105123660046118b3565b610c76565b34801561052357600080fd5b50609854610226565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc16105578133610e9a565b60006105678989898989896108eb565b90506105738184610f52565b6000817f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8b8b8b8b8b8a6040516105af96959493929190611c5b565b60405180910390a3505050505050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061065557507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b600080527f7dc9f88e569f94faad6fa0d44dd44858caf3f34f1bd1c985800aedf5793aad8b6020527fa01e231ca478cf51f663e103939e98de36fa76d3e4e0b1de673dc711acc3a01b547fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e639060ff166106d8576106d88133610e9a565b60006106e88888888888886108eb565b90506106f48185611066565b6107038160008a8a8a8a61116e565b61070c81611299565b5050505050505050565b6000818152609760205260408120546001811180156107355750428111155b9392505050565b6000828152606560205260409020600101546107588133610e9a565b6107628383611328565b505050565b60008181526097602052604081205481905b1192915050565b73ffffffffffffffffffffffffffffffffffffffff811633146108105760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b61081a828261141c565b5050565b600081815260976020526040812054600190610779565b3330146108aa5760405162461bcd60e51b815260206004820152602b60248201527f54696d656c6f636b436f6e74726f6c6c65723a2063616c6c6572206d7573742060448201527f62652074696d656c6f636b0000000000000000000000000000000000000000006064820152608401610807565b60985460408051918252602082018390527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a1609855565b600086868686868660405160200161090896959493929190611c5b565b6040516020818303038152906040528051906020012090509695505050505050565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc16109558133610e9a565b8887146109ca5760405162461bcd60e51b815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d6160448201527f74636800000000000000000000000000000000000000000000000000000000006064820152608401610807565b888514610a3f5760405162461bcd60e51b815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d6160448201527f74636800000000000000000000000000000000000000000000000000000000006064820152608401610807565b6000610a518b8b8b8b8b8b8b8b610b29565b9050610a5d8184610f52565b60005b8a811015610b1b5780827f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8e8e85818110610a9d57610a9d611f4f565b9050602002016020810190610ab291906117b7565b8d8d86818110610ac457610ac4611f4f565b905060200201358c8c87818110610add57610add611f4f565b9050602002810190610aef9190611dc8565b8c8b604051610b0396959493929190611c5b565b60405180910390a3610b1481611ee7565b9050610a60565b505050505050505050505050565b60008888888888888888604051602001610b4a989796959493929190611ca6565b60405160208183030381529060405280519060200120905098975050505050505050565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1610b998133610e9a565b610ba28261081e565b610c145760405162461bcd60e51b815260206004820152603160248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20636160448201527f6e6e6f742062652063616e63656c6c65640000000000000000000000000000006064820152608401610807565b6000828152609760205260408082208290555183917fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb7091a25050565b600082815260656020526040902060010154610c6c8133610e9a565b610762838361141c565b600080527f7dc9f88e569f94faad6fa0d44dd44858caf3f34f1bd1c985800aedf5793aad8b6020527fa01e231ca478cf51f663e103939e98de36fa76d3e4e0b1de673dc711acc3a01b547fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e639060ff16610cf357610cf38133610e9a565b878614610d685760405162461bcd60e51b815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d6160448201527f74636800000000000000000000000000000000000000000000000000000000006064820152608401610807565b878414610ddd5760405162461bcd60e51b815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d6160448201527f74636800000000000000000000000000000000000000000000000000000000006064820152608401610807565b6000610def8a8a8a8a8a8a8a8a610b29565b9050610dfb8185611066565b60005b89811015610e8457610e7482828d8d85818110610e1d57610e1d611f4f565b9050602002016020810190610e3291906117b7565b8c8c86818110610e4457610e44611f4f565b905060200201358b8b87818110610e5d57610e5d611f4f565b9050602002810190610e6f9190611dc8565b61116e565b610e7d81611ee7565b9050610dfe565b50610e8e81611299565b50505050505050505050565b600082815260656020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff1661081a57610ef28173ffffffffffffffffffffffffffffffffffffffff1660146114d7565b610efd8360206114d7565b604051602001610f0e929190611b9a565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905262461bcd60e51b825261080791600401611d77565b610f5b82610767565b15610fce5760405162461bcd60e51b815260206004820152602f60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20616c60448201527f7265616479207363686564756c656400000000000000000000000000000000006064820152608401610807565b6098548110156110465760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a20696e73756666696369656e7460448201527f2064656c617900000000000000000000000000000000000000000000000000006064820152608401610807565b6110508142611e2d565b6000928352609760205260409092209190915550565b61106f82610716565b6110e15760405162461bcd60e51b815260206004820152602a60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20697360448201527f206e6f74207265616479000000000000000000000000000000000000000000006064820152608401610807565b8015806110fc57506000818152609760205260409020546001145b61081a5760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a206d697373696e67206465706560448201527f6e64656e637900000000000000000000000000000000000000000000000000006064820152608401610807565b60008473ffffffffffffffffffffffffffffffffffffffff16848484604051611198929190611b8a565b60006040518083038185875af1925050503d80600081146111d5576040519150601f19603f3d011682016040523d82523d6000602084013e6111da565b606091505b50509050806112515760405162461bcd60e51b815260206004820152603360248201527f54696d656c6f636b436f6e74726f6c6c65723a20756e6465726c79696e67207460448201527f72616e73616374696f6e207265766572746564000000000000000000000000006064820152608401610807565b85877fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b58878787876040516112889493929190611c1b565b60405180910390a350505050505050565b6112a281610716565b6113145760405162461bcd60e51b815260206004820152602a60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20697360448201527f206e6f74207265616479000000000000000000000000000000000000000000006064820152608401610807565b600090815260976020526040902060019055565b600082815260656020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff1661081a57600082815260656020908152604080832073ffffffffffffffffffffffffffffffffffffffff85168452909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556113be3390565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b600082815260656020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff161561081a57600082815260656020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b606060006114e6836002611e45565b6114f1906002611e2d565b67ffffffffffffffff81111561150957611509611f7e565b6040519080825280601f01601f191660200182016040528015611533576020820181803683370190505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061156a5761156a611f4f565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106115cd576115cd611f4f565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000611609846002611e45565b611614906001611e2d565b90505b60018111156116b1577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061165557611655611f4f565b1a60f81b82828151811061166b5761166b611f4f565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c936116aa81611eb2565b9050611617565b5083156107355760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610807565b803573ffffffffffffffffffffffffffffffffffffffff8116811461172457600080fd5b919050565b60008083601f84011261173b57600080fd5b50813567ffffffffffffffff81111561175357600080fd5b6020830191508360208260051b850101111561176e57600080fd5b9250929050565b60008083601f84011261178757600080fd5b50813567ffffffffffffffff81111561179f57600080fd5b60208301915083602082850101111561176e57600080fd5b6000602082840312156117c957600080fd5b61073582611700565b60008060008060008060a087890312156117eb57600080fd5b6117f487611700565b955060208701359450604087013567ffffffffffffffff81111561181757600080fd5b61182389828a01611775565b979a9699509760608101359660809091013595509350505050565b600080600080600080600060c0888a03121561185957600080fd5b61186288611700565b965060208801359550604088013567ffffffffffffffff81111561188557600080fd5b6118918a828b01611775565b989b979a50986060810135976080820135975060a09091013595509350505050565b60008060008060008060008060a0898b0312156118cf57600080fd5b883567ffffffffffffffff808211156118e757600080fd5b6118f38c838d01611729565b909a50985060208b013591508082111561190c57600080fd5b6119188c838d01611729565b909850965060408b013591508082111561193157600080fd5b5061193e8b828c01611729565b999c989b509699959896976060870135966080013595509350505050565b600080600080600080600080600060c08a8c03121561197a57600080fd5b893567ffffffffffffffff8082111561199257600080fd5b61199e8d838e01611729565b909b50995060208c01359150808211156119b757600080fd5b6119c38d838e01611729565b909950975060408c01359150808211156119dc57600080fd5b506119e98c828d01611729565b9a9d999c50979a969997986060880135976080810135975060a0013595509350505050565b600060208284031215611a2057600080fd5b5035919050565b60008060408385031215611a3a57600080fd5b82359150611a4a60208401611700565b90509250929050565b600060208284031215611a6557600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461073557600080fd5b818352600060208085019450848460051b86018460005b87811015611b3457838303895281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1883603018112611aeb57600080fd5b8701803567ffffffffffffffff811115611b0457600080fd5b803603891315611b1357600080fd5b611b208582898501611b41565b9a87019a9450505090840190600101611aac565b5090979650505050505050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b8183823760009101908152919050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611bd2816017850160208801611e82565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351611c0f816028840160208801611e82565b01602801949350505050565b73ffffffffffffffffffffffffffffffffffffffff85168152836020820152606060408201526000611c51606083018486611b41565b9695505050505050565b73ffffffffffffffffffffffffffffffffffffffff8716815285602082015260a060408201526000611c9160a083018688611b41565b60608301949094525060800152949350505050565b60a0808252810188905260008960c08301825b8b811015611cf45773ffffffffffffffffffffffffffffffffffffffff611cdf84611700565b16825260209283019290910190600101611cb9565b5083810360208501528881527f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff891115611d2d57600080fd5b8860051b9150818a602083013781810191505060208101600081526020848303016040850152611d5e81888a611a95565b6060850196909652505050608001529695505050505050565b6020815260008251806020840152611d96816040850160208701611e82565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611dfd57600080fd5b83018035915067ffffffffffffffff821115611e1857600080fd5b60200191503681900382131561176e57600080fd5b60008219821115611e4057611e40611f20565b500190565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611e7d57611e7d611f20565b500290565b60005b83811015611e9d578181015183820152602001611e85565b83811115611eac576000848401525b50505050565b600081611ec157611ec1611f20565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611f1957611f19611f20565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea2646970667358221220d3aa6af2c36e83354d3bbb132a247a3c1b5052365ed0f41dcb1095fcf804a47964736f6c63430008060033";

export class TimelockControllerUpgradeable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TimelockControllerUpgradeable> {
    return super.deploy(
      overrides || {}
    ) as Promise<TimelockControllerUpgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TimelockControllerUpgradeable {
    return super.attach(address) as TimelockControllerUpgradeable;
  }
  connect(signer: Signer): TimelockControllerUpgradeable__factory {
    return super.connect(signer) as TimelockControllerUpgradeable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockControllerUpgradeableInterface {
    return new utils.Interface(_abi) as TimelockControllerUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimelockControllerUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TimelockControllerUpgradeable;
  }
}