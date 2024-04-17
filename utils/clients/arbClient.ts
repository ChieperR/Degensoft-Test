import {
    Chain,
    createPublicClient,
    createWalletClient, defineChain,
    Hex,
    http,
    HttpTransport,
    PrivateKeyAccount, publicActions, PublicClient,
    WalletClient
} from "viem"
import {privateKeyToAccount} from "viem/accounts"
import {rpc} from "../../rpc_config"

export const arbitrum = /*#__PURE__*/ defineChain({
    id: 42_161,
    name: 'Arbitrum',
    network: 'arbitrum',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        alchemy: {
            http: ['https://arb-mainnet.g.alchemy.com/v2'],
            webSocket: ['wss://arb-mainnet.g.alchemy.com/v2'],
        },
        infura: {
            http: ['https://arbitrum-mainnet.infura.io/v3'],
            webSocket: ['wss://arbitrum-mainnet.infura.io/ws/v3'],
        },
        default: {
            http: rpc,
        },
        public: {
            http: [rpc[2]]
        }
    },
    blockExplorers: {
        etherscan: { name: 'Arbiscan', url: 'https://arbiscan.io' },
        default: { name: 'Arbiscan', url: 'https://arbiscan.io' },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 7654707,
        },
    },
})

function getArbPublicClient(): PublicClient {
    return createPublicClient(
        {chain: arbitrum,
            transport: http()
        })
}

function getArbWalletClient(privateKey: Hex): WalletClient<HttpTransport, Chain, PrivateKeyAccount> {
    return createWalletClient({
        chain: arbitrum,
        account: privateKeyToAccount(privateKey),
        transport: http()
    }).extend(publicActions)
}

export {getArbPublicClient, getArbWalletClient}