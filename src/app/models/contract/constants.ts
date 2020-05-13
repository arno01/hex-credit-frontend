export const ContractConstants = {
  ADDRESSES: {
    ropsten: '0x6F412047EA93F1ACC55bDB6beaC671F5C5dB88CA',
    mainnet: ''
  },
  TOKEN_ADDRESSES: {
    ropsten: '0x154A4E5972E82A8cB045270b07D5F6c8fBee7f5F',
    mainnet: '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39'
  },
  UNISWAP_ADDRESSES: {
    ropsten: '0xd993C91bf4438795e679BeDC09B1b8FdDE042Be5',
    mainnet: ''
  },
  ERC20_ABI: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256'
        }
      ],
      name: 'Approval',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint40',
          name: 'timestamp',
          type: 'uint40'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'claimToAddr',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'bytes20',
          name: 'btcAddr',
          type: 'bytes20'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'rawSatoshis',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'adjSatoshis',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'claimedHearts',
          type: 'uint256'
        }
      ],
      name: 'Claim',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint40',
          name: 'timestamp',
          type: 'uint40'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'claimToAddr',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'bytes20',
          name: 'btcAddr',
          type: 'bytes20'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'rawSatoshis',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'adjSatoshis',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'claimedHearts',
          type: 'uint256'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'referrerAddr',
          type: 'address'
        }
      ],
      name: 'ClaimReferredByOther',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint40',
          name: 'timestamp',
          type: 'uint40'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'claimToAddr',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'bytes20',
          name: 'btcAddr',
          type: 'bytes20'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'rawSatoshis',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'adjSatoshis',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'claimedHearts',
          type: 'uint256'
        }
      ],
      name: 'ClaimReferredBySelf',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint40',
          name: 'timestamp',
          type: 'uint40'
        },
        {
          indexed: false,
          internalType: 'uint16',
          name: 'daysStoredAdded',
          type: 'uint16'
        },
        {
          indexed: false,
          internalType: 'uint16',
          name: 'daysStoredTotal',
          type: 'uint16'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'updaterAddr',
          type: 'address'
        }
      ],
      name: 'DailyDataUpdate',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint40',
          name: 'timestamp',
          type: 'uint40'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'stakerAddr',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'uint48',
          name: 'stakeId',
          type: 'uint48'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'payout',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'penalty',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint16',
          name: 'servedDays',
          type: 'uint16'
        }
      ],
      name: 'EndStake',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint40',
          name: 'timestamp',
          type: 'uint40'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'stakerAddr',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'uint48',
          name: 'stakeId',
          type: 'uint48'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'payout',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'penalty',
          type: 'uint256'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'otherAddr',
          type: 'address'
        }
      ],
      name: 'GoodAccountingByOther',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint40',
          name: 'timestamp',
          type: 'uint40'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'stakerAddr',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'uint48',
          name: 'stakeId',
          type: 'uint48'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'payout',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'penalty',
          type: 'uint256'
        }
      ],
      name: 'GoodAccountingBySelf',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint40',
          name: 'timestamp',
          type: 'uint40'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'stakerAddr',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'uint48',
          name: 'stakeId',
          type: 'uint48'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'stakedHearts',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint16',
          name: 'stakedDays',
          type: 'uint16'
        }
      ],
      name: 'StartStake',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address'
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256'
        }
      ],
      name: 'Transfer',
      type: 'event'
    },
    {
      payable: true,
      stateMutability: 'payable',
      type: 'fallback'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address'
        }
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256'
        }
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address'
        }
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'bytes20',
          name: 'btcAddr',
          type: 'bytes20'
        },
        {
          internalType: 'uint256',
          name: 'rawSatoshis',
          type: 'uint256'
        },
        {
          internalType: 'bytes32[]',
          name: 'proof',
          type: 'bytes32[]'
        }
      ],
      name: 'btcAddressIsValid',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      payable: false,
      stateMutability: 'pure',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: 'stakeSharesParam',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'beginDay',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'endDay',
          type: 'uint256'
        }
      ],
      name: 'calcPayoutRewards',
      outputs: [
        {
          internalType: 'uint256',
          name: 'payout',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'bytes20',
          name: 'btcAddr',
          type: 'bytes20'
        },
        {
          internalType: 'uint256',
          name: 'rawSatoshis',
          type: 'uint256'
        },
        {
          internalType: 'bytes32[]',
          name: 'proof',
          type: 'bytes32[]'
        }
      ],
      name: 'canClaimBtcAddress',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'circulatingSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'rawSatoshis',
          type: 'uint256'
        },
        {
          internalType: 'bytes32[]',
          name: 'proof',
          type: 'bytes32[]'
        },
        {
          internalType: 'address',
          name: 'claimToAddr',
          type: 'address'
        },
        {
          internalType: 'bytes32',
          name: 'pubKeyX',
          type: 'bytes32'
        },
        {
          internalType: 'bytes32',
          name: 'pubKeyY',
          type: 'bytes32'
        },
        {
          internalType: 'uint8',
          name: 'addrType',
          type: 'uint8'
        },
        {
          internalType: 'uint8',
          name: 'v',
          type: 'uint8'
        },
        {
          internalType: 'bytes32',
          name: 'r',
          type: 'bytes32'
        },
        {
          internalType: 'bytes32',
          name: 's',
          type: 'bytes32'
        },
        {
          internalType: 'address',
          name: 'referrerAddr',
          type: 'address'
        }
      ],
      name: 'claimBtcAddress',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'bytes20',
          name: '',
          type: 'bytes20'
        }
      ],
      name: 'claimedBtcAddresses',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      name: 'dailyData',
      outputs: [
        {
          internalType: 'uint80',
          name: 'dayPayoutTotal',
          type: 'uint80'
        },
        {
          internalType: 'uint80',
          name: 'dayStakeSharesTotal',
          type: 'uint80'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'subtractedValue',
          type: 'uint256'
        }
      ],
      name: 'decreaseAllowance',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'stakeIndex',
          type: 'uint256'
        },
        {
          internalType: 'uint48',
          name: 'stakeIdParam',
          type: 'uint48'
        }
      ],
      name: 'endStake',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [],
      name: 'flushTrappedEth',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'getCurrentDay',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: 'offset',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'count',
          type: 'uint256'
        }
      ],
      name: 'getDailyDataRange',
      outputs: [
        {
          internalType: 'uint256[]',
          name: 'list',
          type: 'uint256[]'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'getGlobalInfo',
      outputs: [
        {
          internalType: 'uint256[11]',
          name: '',
          type: 'uint256[11]'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'ethAddr',
          type: 'address'
        }
      ],
      name: 'getStakeCount',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'globals',
      outputs: [
        {
          internalType: 'uint16',
          name: 'daysStored',
          type: 'uint16'
        },
        {
          internalType: 'uint80',
          name: 'stakeSharesTotal',
          type: 'uint80'
        },
        {
          internalType: 'uint80',
          name: 'nextStakeSharesTotal',
          type: 'uint80'
        },
        {
          internalType: 'uint48',
          name: 'latestStakeId',
          type: 'uint48'
        },
        {
          internalType: 'uint80',
          name: 'stakePenaltyPool',
          type: 'uint80'
        },
        {
          internalType: 'uint64',
          name: 'unclaimedSatoshisTotal',
          type: 'uint64'
        },
        {
          internalType: 'uint64',
          name: 'claimedSatoshisTotal',
          type: 'uint64'
        },
        {
          internalType: 'uint32',
          name: 'claimedBtcAddrCount',
          type: 'uint32'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'stakerAddr',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'stakeIndex',
          type: 'uint256'
        },
        {
          internalType: 'uint48',
          name: 'stakeIdParam',
          type: 'uint48'
        }
      ],
      name: 'goodAccounting',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'addedValue',
          type: 'uint256'
        }
      ],
      name: 'increaseAllowance',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'bytes32',
          name: 'merkleLeaf',
          type: 'bytes32'
        },
        {
          internalType: 'bytes32[]',
          name: 'proof',
          type: 'bytes32[]'
        }
      ],
      name: 'merkleProofIsValid',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      payable: false,
      stateMutability: 'pure',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'bytes32',
          name: 'pubKeyX',
          type: 'bytes32'
        },
        {
          internalType: 'bytes32',
          name: 'pubKeyY',
          type: 'bytes32'
        },
        {
          internalType: 'uint8',
          name: 'addrType',
          type: 'uint8'
        }
      ],
      name: 'pubKeyToBtcAddress',
      outputs: [
        {
          internalType: 'bytes20',
          name: '',
          type: 'bytes20'
        }
      ],
      payable: false,
      stateMutability: 'pure',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'bytes32',
          name: 'pubKeyX',
          type: 'bytes32'
        },
        {
          internalType: 'bytes32',
          name: 'pubKeyY',
          type: 'bytes32'
        }
      ],
      name: 'pubKeyToEthAddress',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      payable: false,
      stateMutability: 'pure',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'claimToAddr',
          type: 'address'
        },
        {
          internalType: 'bytes32',
          name: 'pubKeyX',
          type: 'bytes32'
        },
        {
          internalType: 'bytes32',
          name: 'pubKeyY',
          type: 'bytes32'
        },
        {
          internalType: 'uint8',
          name: 'v',
          type: 'uint8'
        },
        {
          internalType: 'bytes32',
          name: 'r',
          type: 'bytes32'
        },
        {
          internalType: 'bytes32',
          name: 's',
          type: 'bytes32'
        }
      ],
      name: 'signatureMatchesClaim',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      payable: false,
      stateMutability: 'pure',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      name: 'staked',
      outputs: [
        {
          internalType: 'uint48',
          name: 'stakeId',
          type: 'uint48'
        },
        {
          internalType: 'uint80',
          name: 'stakedHearts',
          type: 'uint80'
        },
        {
          internalType: 'uint80',
          name: 'stakeShares',
          type: 'uint80'
        },
        {
          internalType: 'uint16',
          name: 'pooledDay',
          type: 'uint16'
        },
        {
          internalType: 'uint16',
          name: 'stakedDays',
          type: 'uint16'
        },
        {
          internalType: 'uint16',
          name: 'unpooledDay',
          type: 'uint16'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'newStakedHearts',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'newStakedDays',
          type: 'uint256'
        }
      ],
      name: 'startStake',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'beforeDay',
          type: 'uint256'
        }
      ],
      name: 'storeDailyDataBefore',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'recipient',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256'
        }
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'sender',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'recipient',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256'
        }
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool'
        }
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256'
        }
      ],
      name: 'mint',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    }
  ],
  UNISWAP_ABI: [
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: 'tokens_sold',
          type: 'uint256'
        }
      ],
      name: 'getTokenToEthInputPrice',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: 'eth_sold',
          type: 'uint256'
        }
      ],
      name: 'getEthToTokenInputPrice',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    }
  ],
  CONTRACT_ABI: [
    {
      inputs: [
        {
          internalType: 'address payable',
          name: 'newAdmin',
          type: 'address'
        },
        {
          internalType: 'address payable',
          name: 'newHexErc20Address',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'newUniswapAddress',
          type: 'address'
        }
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'id',
          type: 'bytes32'
        },
        {
          indexed: false,
          internalType: 'enum Models.Status',
          name: 'status',
          type: 'uint8'
        }
      ],
      name: 'LiquidatedCredit',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'id',
          type: 'bytes32'
        }
      ],
      name: 'NewCredit',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'rqHash',
          type: 'bytes32'
        }
      ],
      name: 'NewLqPool',
      type: 'event'
    },
    {
      constant: true,
      inputs: [],
      name: 'admin',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32'
        }
      ],
      name: 'cdps',
      outputs: [
        {
          internalType: 'bytes32',
          name: 'lqPoolId',
          type: 'bytes32'
        },
        {
          internalType: 'uint256',
          name: 'totalAmount',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'withheldHexAmount',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'hexLockedAmount',
          type: 'uint256'
        },
        {
          internalType: 'address',
          name: 'owner',
          type: 'address'
        },
        {
          internalType: 'address',
          name: 'stakingProxy',
          type: 'address'
        },
        {
          internalType: 'enum Models.Status',
          name: 'status',
          type: 'uint8'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32'
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      name: 'cdpsByCredit',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32'
        }
      ],
      name: 'credits',
      outputs: [
        {
          internalType: 'uint256',
          name: 'createdAt',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'totalAmount',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'withheldHexAmount',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'hexLockedAmount',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'expireTime',
          type: 'uint256'
        },
        {
          internalType: 'uint8',
          name: 'hexPeriodIndex',
          type: 'uint8'
        },
        {
          internalType: 'address',
          name: 'owner',
          type: 'address'
        },
        {
          internalType: 'enum Models.Status',
          name: 'status',
          type: 'uint8'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32'
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      name: 'creditsByLqPoolId',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      name: 'creditsByOwner',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'defaultHexForUniswap',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      name: 'ethPeriods',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'feeDeposit',
      outputs: [
        {
          internalType: 'uint16',
          name: '',
          type: 'uint16'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'feeLoan',
      outputs: [
        {
          internalType: 'uint16',
          name: '',
          type: 'uint16'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'getEthPeriods',
      outputs: [
        {
          internalType: 'uint8[]',
          name: '',
          type: 'uint8[]'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'getHexPeriods',
      outputs: [
        {
          internalType: 'uint8[]',
          name: '',
          type: 'uint8[]'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'hexErc20Address',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      name: 'hexPeriods',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'hexTeamPenalty',
      outputs: [
        {
          internalType: 'uint16',
          name: '',
          type: 'uint16'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'loanShare',
      outputs: [
        {
          internalType: 'uint16',
          name: '',
          type: 'uint16'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'lockPeriod',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'lqPoolQueue',
      outputs: [
        {
          internalType: 'bytes32',
          name: 'first',
          type: 'bytes32'
        },
        {
          internalType: 'bytes32',
          name: 'last',
          type: 'bytes32'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32'
        }
      ],
      name: 'lqPools',
      outputs: [
        {
          internalType: 'uint256',
          name: 'createdAt',
          type: 'uint256'
        },
        {
          internalType: 'address payable',
          name: 'owner',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: 'totalAmount',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'freeAmount',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'hexLockedAmount',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'hexPaydAmount',
          type: 'uint256'
        },
        {
          internalType: 'uint256',
          name: 'maxDays',
          type: 'uint256'
        },
        {
          internalType: 'uint8',
          name: 'ethPeriodIndex',
          type: 'uint8'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        },
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      name: 'lqPoolsByOwner',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'maxCDPInCredit',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'minHexLoan',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'minWeiCDP',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'secondsInDay',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address payable',
          name: 'newAdmin',
          type: 'address'
        }
      ],
      name: 'setAdmin',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint8[]',
          name: 'newEthPeriods',
          type: 'uint8[]'
        }
      ],
      name: 'setEthPeriods',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint8',
          name: 'newFee',
          type: 'uint8'
        }
      ],
      name: 'setFeeAndLoanDepositPercent',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint8',
          name: 'newFee',
          type: 'uint8'
        }
      ],
      name: 'setFeeDepositPercent',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint8',
          name: 'newFeeLoan',
          type: 'uint8'
        },
        {
          internalType: 'uint8',
          name: 'newFeeDeposit',
          type: 'uint8'
        }
      ],
      name: 'setFeeLoanDepositPercent',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint8',
          name: 'newFee',
          type: 'uint8'
        }
      ],
      name: 'setFeeLoanPercent',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint8[]',
          name: 'newHexPeriods',
          type: 'uint8[]'
        }
      ],
      name: 'setHexPeriods',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint8',
          name: 'newHexTeamPenalty',
          type: 'uint8'
        }
      ],
      name: 'setHexTeamPenaltyShare',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint8',
          name: 'newLoanShare',
          type: 'uint8'
        }
      ],
      name: 'setLoanShare',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint8',
          name: 'newLockPeriod',
          type: 'uint8'
        }
      ],
      name: 'setLockPeriod',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint8',
          name: 'newMinHexLoan',
          type: 'uint8'
        }
      ],
      name: 'setMinHexLoan',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint8',
          name: 'newMinWeiCDP',
          type: 'uint8'
        }
      ],
      name: 'setMinWeiCDP',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'newUniswapAddress',
          type: 'address'
        }
      ],
      name: 'setUniswapAddress',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'totalEthAvailable',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8'
        }
      ],
      name: 'totalEthAvailableByPeriod',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'totalHexStaked',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8'
        }
      ],
      name: 'totalHexStakedByPeriod',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'uniswapAddress',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'withheldShare',
      outputs: [
        {
          internalType: 'uint16',
          name: '',
          type: 'uint16'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address'
        }
      ],
      name: 'getCreditsByOwner',
      outputs: [
        {
          internalType: 'bytes32[]',
          name: '',
          type: 'bytes32[]'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address'
        }
      ],
      name: 'getLqPoolsByOwner',
      outputs: [
        {
          internalType: 'bytes32[]',
          name: '',
          type: 'bytes32[]'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'bytes32',
          name: 'creditId',
          type: 'bytes32'
        }
      ],
      name: 'getCdpsByCredit',
      outputs: [
        {
          internalType: 'bytes32[]',
          name: '',
          type: 'bytes32[]'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'bytes32',
          name: 'lqPoolId',
          type: 'bytes32'
        }
      ],
      name: 'getCreditsByLqPoolId',
      outputs: [
        {
          internalType: 'bytes32[]',
          name: '',
          type: 'bytes32[]'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'getTotalEthAvailable',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint8',
          name: 'ethPeriodIndex',
          type: 'uint8'
        }
      ],
      name: 'getTotalEthAvailableByPeriod',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'getTotalHexStaked',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'uint8',
          name: 'hexPeriodIndex',
          type: 'uint8'
        }
      ],
      name: 'getTotalHexStakedByPeriod',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint8',
          name: 'ethPeriodIndex',
          type: 'uint8'
        }
      ],
      name: 'addToLiquidityPool',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32'
        }
      ],
      payable: true,
      stateMutability: 'payable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256'
        },
        {
          internalType: 'uint8',
          name: 'hexPeriodIndex',
          type: 'uint8'
        }
      ],
      name: 'takeCredit',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'bytes32',
          name: 'id',
          type: 'bytes32'
        }
      ],
      name: 'payCredit',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'bytes32',
          name: 'id',
          type: 'bytes32'
        }
      ],
      name: 'liquidateCredit',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'bytes32',
          name: 'poolId',
          type: 'bytes32'
        }
      ],
      name: 'withdrawFromPoolWithFee',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'bytes32',
          name: 'poolId',
          type: 'bytes32'
        }
      ],
      name: 'withdrawFromPoolAfterLockPeriod',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    }
  ]
};
