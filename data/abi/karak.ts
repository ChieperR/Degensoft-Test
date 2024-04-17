export const karakAbi = [{"inputs": [], "stateMutability": "nonpayable", "type": "constructor"}, {
    "inputs": [],
    "name": "AlreadyInitialized",
    "type": "error"
}, {"inputs": [], "name": "CrossedDepositLimit", "type": "error"}, {
    "inputs": [],
    "name": "ECDSAInvalidSignature",
    "type": "error"
}, {
    "inputs": [{"internalType": "uint256", "name": "length", "type": "uint256"}],
    "name": "ECDSAInvalidSignatureLength",
    "type": "error"
}, {
    "inputs": [{"internalType": "bytes32", "name": "s", "type": "bytes32"}],
    "name": "ECDSAInvalidSignatureS",
    "type": "error"
}, {"inputs": [], "name": "EnforcedPause", "type": "error"}, {
    "inputs": [],
    "name": "ExpectedPause",
    "type": "error"
}, {"inputs": [], "name": "ExpiredSign", "type": "error"}, {
    "inputs": [],
    "name": "InvalidInitialization",
    "type": "error"
}, {"inputs": [], "name": "InvalidSignature", "type": "error"}, {
    "inputs": [],
    "name": "InvalidVaultAdminFunction",
    "type": "error"
}, {"inputs": [], "name": "MaxStakerVault", "type": "error"}, {
    "inputs": [],
    "name": "NewOwnerIsZeroAddress",
    "type": "error"
}, {"inputs": [], "name": "NoHandoverRequest", "type": "error"}, {
    "inputs": [],
    "name": "NotDelegationSupervisor",
    "type": "error"
}, {"inputs": [], "name": "NotEnoughShares", "type": "error"}, {
    "inputs": [],
    "name": "NotInitializing",
    "type": "error"
}, {"inputs": [], "name": "PermitFailed", "type": "error"}, {
    "inputs": [],
    "name": "Reentrancy",
    "type": "error"
}, {"inputs": [], "name": "Unauthorized", "type": "error"}, {
    "inputs": [],
    "name": "UnauthorizedCallContext",
    "type": "error"
}, {"inputs": [], "name": "UpgradeFailed", "type": "error"}, {
    "inputs": [],
    "name": "VaultNotAChildVault",
    "type": "error"
}, {"inputs": [], "name": "VaultNotFound", "type": "error"}, {
    "inputs": [],
    "name": "ZeroAddress",
    "type": "error"
}, {"inputs": [], "name": "ZeroShares", "type": "error"}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "uint64", "name": "version", "type": "uint64"}],
    "name": "Initialized",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "vault", "type": "address"}],
    "name": "NewVault",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "pendingOwner", "type": "address"}],
    "name": "OwnershipHandoverCanceled",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "pendingOwner", "type": "address"}],
    "name": "OwnershipHandoverRequested",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "oldOwner", "type": "address"}, {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
    }],
    "name": "OwnershipTransferred",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "account", "type": "address"}],
    "name": "Paused",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "user", "type": "address"}, {
        "indexed": true,
        "internalType": "uint256",
        "name": "roles",
        "type": "uint256"
    }],
    "name": "RolesUpdated",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "address", "name": "account", "type": "address"}],
    "name": "Unpaused",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "implementation", "type": "address"}],
    "name": "Upgraded",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "implementation", "type": "address"}],
    "name": "UpgradedAllVaults",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "implementation",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "vault", "type": "address"}],
    "name": "UpgradedVault",
    "type": "event"
}, {
    "inputs": [],
    "name": "SIGNED_DEPOSIT_TYPEHASH",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "stateMutability": "pure",
    "type": "function"
}, {
    "inputs": [],
    "name": "cancelOwnershipHandover",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "newVaultImpl", "type": "address"}],
    "name": "changeImplementation",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "vault", "type": "address"}, {
        "internalType": "address",
        "name": "newVaultImpl",
        "type": "address"
    }], "name": "changeImplementationForVault", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "pendingOwner", "type": "address"}],
    "name": "completeOwnershipHandover",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [],
    "name": "delegationSupervisor",
    "outputs": [{"internalType": "contract IDelegationSupervisor", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "contract IERC20",
        "name": "depositToken",
        "type": "address"
    }, {"internalType": "string", "name": "name", "type": "string"}, {
        "internalType": "string",
        "name": "symbol",
        "type": "string"
    }, {"internalType": "enum IVault.AssetType", "name": "assetType", "type": "uint8"}],
    "name": "deployVault",
    "outputs": [{"internalType": "contract IVault", "name": "", "type": "address"}],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "contract IVault", "name": "vault", "type": "address"}, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }],
    "name": "deposit",
    "outputs": [{"internalType": "uint256", "name": "shares", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "contract IVault", "name": "vault", "type": "address"}, {
        "internalType": "address",
        "name": "user",
        "type": "address"
    }, {"internalType": "uint256", "name": "value", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
    }, {
        "components": [{"internalType": "uint8", "name": "v", "type": "uint8"}, {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
        }, {"internalType": "bytes32", "name": "s", "type": "bytes32"}],
        "internalType": "struct IVaultSupervisor.Signature",
        "name": "permit",
        "type": "tuple"
    }, {
        "components": [{"internalType": "uint8", "name": "v", "type": "uint8"}, {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
        }, {"internalType": "bytes32", "name": "s", "type": "bytes32"}],
        "internalType": "struct IVaultSupervisor.Signature",
        "name": "vaultAllowance",
        "type": "tuple"
    }],
    "name": "depositWithSignature",
    "outputs": [{"internalType": "uint256", "name": "shares", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "staker", "type": "address"}],
    "name": "getDeposits",
    "outputs": [{
        "internalType": "contract IVault[]",
        "name": "vaults",
        "type": "address[]"
    }, {"internalType": "contract IERC20[]", "name": "tokens", "type": "address[]"}, {
        "internalType": "uint256[]",
        "name": "assets",
        "type": "uint256[]"
    }, {"internalType": "uint256[]", "name": "shares", "type": "uint256[]"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
    "name": "getUserNonce",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "getVaults",
    "outputs": [{"internalType": "contract IVault[]", "name": "", "type": "address[]"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "user", "type": "address"}, {
        "internalType": "uint256",
        "name": "roles",
        "type": "uint256"
    }], "name": "grantRoles", "outputs": [], "stateMutability": "payable", "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "user", "type": "address"}, {
        "internalType": "uint256",
        "name": "roles",
        "type": "uint256"
    }],
    "name": "hasAllRoles",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "user", "type": "address"}, {
        "internalType": "uint256",
        "name": "roles",
        "type": "uint256"
    }],
    "name": "hasAnyRole",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "implementation",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "vault", "type": "address"}],
    "name": "implementation",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "_delegationSupervisor",
        "type": "address"
    }, {"internalType": "address", "name": "_vaultImpl", "type": "address"}, {
        "internalType": "contract ILimiter",
        "name": "_limiter",
        "type": "address"
    }, {"internalType": "address", "name": "_manager", "type": "address"}],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "owner",
    "outputs": [{"internalType": "address", "name": "result", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "pendingOwner", "type": "address"}],
    "name": "ownershipHandoverExpiresAt",
    "outputs": [{"internalType": "uint256", "name": "result", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "bool", "name": "toPause", "type": "bool"}],
    "name": "pause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "paused",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "proxiableUUID",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "staker", "type": "address"}, {
        "internalType": "contract IVault",
        "name": "vault",
        "type": "address"
    }, {"internalType": "uint256", "name": "shares", "type": "uint256"}],
    "name": "redeemShares",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "staker", "type": "address"}, {
        "internalType": "contract IVault",
        "name": "vault",
        "type": "address"
    }, {"internalType": "uint256", "name": "shares", "type": "uint256"}],
    "name": "removeShares",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "roles", "type": "uint256"}],
    "name": "renounceRoles",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [],
    "name": "requestOwnershipHandover",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "user", "type": "address"}, {
        "internalType": "uint256",
        "name": "roles",
        "type": "uint256"
    }], "name": "revokeRoles", "outputs": [], "stateMutability": "payable", "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "user", "type": "address"}],
    "name": "rolesOf",
    "outputs": [{"internalType": "uint256", "name": "roles", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "contract IVault", "name": "vault", "type": "address"}, {
        "internalType": "bytes",
        "name": "fn",
        "type": "bytes"
    }],
    "name": "runAdminOperation",
    "outputs": [{"internalType": "bytes", "name": "", "type": "bytes"}],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "contract ILimiter", "name": "limiter", "type": "address"}],
    "name": "setLimiter",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "newImplementation", "type": "address"}, {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
    }], "name": "upgradeToAndCall", "outputs": [], "stateMutability": "payable", "type": "function"
}]