import {privateKeyConvert, readWallets} from "./utils/wallet"
import {shuffle} from "./utils/common"
import {makeLogger} from "./utils/logger";
import {Hex} from "viem";
import {generalConfig} from "./config"
import {Karak} from "./modules/karak";
import {decryptPrivateKey} from "./utils/decryptWallets";

let privateKeysTmp = readWallets('./wallets.txt')
let privateKeys = generalConfig.useEncryptedWallets ? privateKeysTmp.map(decryptPrivateKey).map(privateKeyConvert) : privateKeysTmp.map(privateKeyConvert)
if (generalConfig.isRandomWallets) shuffle(privateKeys)

const accountWork = async (privateKey: Hex) => {
    const karak = Karak(privateKey)
    await karak.depositEth()
}

const start = async () => {
    const logger = makeLogger("ChieperSoft")

    for (let privateKey of privateKeys) {
        await accountWork(privateKey)
    }

    logger.info('Скрипт завершил работу!')
}

await start()