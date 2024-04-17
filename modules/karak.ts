import {
    formatEther, getContract, Hex, parseEther,
} from 'viem'
import {waitGas} from "../utils/getCurrentGas";
import {makeLogger} from "../utils/logger";
import {isBalanceError} from "../utils/checkBalance";
import {random, randomFloat, sleep} from "../utils/common";
import {getTokenBalance} from "../utils/tokenBalance";
import {approve} from "../utils/approve";
import {generalConfig} from "../config";
import {karakAbi} from "../data/abi/karak";
import {getArbPublicClient, getArbWalletClient} from "../utils/clients/arbClient";
import {ezEthAddress, vaultAddress} from "../data/contractAdresses";

export const Karak = (privateKey: Hex) => {
    const logger = makeLogger('Karak   ')
    const arbClient = getArbPublicClient()
    const arbWallet = getArbWalletClient(privateKey)
    const walletAddress = arbWallet.account.address

    const karakContract = getContract({
        address: '0x399f22ae52a18382a67542b3De9BeD52b7B9A4ad',
        abi: karakAbi,
        client: arbWallet,
    })

    const makeDepositTransaction = async (uintValue: bigint) => {
        await waitGas()
        let isSuccess = false
        let retryCount = 1

        const value = formatEther(uintValue)

        logger.info(`${walletAddress} | Deposit ${value} ezETH to Karak`)

        while (!isSuccess) {
            try {
                await approve(arbWallet, arbClient, ezEthAddress, vaultAddress, uintValue, logger)

                const txHash = await karakContract.write.deposit([
                    vaultAddress,
                    uintValue
                ])

                const receipt = await arbClient.waitForTransactionReceipt({
                    hash: txHash
                })

                if (receipt.status !== 'reverted') {
                    logger.info(`${walletAddress} | Success deposit ${value} ezETH to Karak: https://arbiscan.io/tx/${txHash}`)
                    isSuccess = true

                    const waitingTime = random(generalConfig.sleepBetweenWallets[0], generalConfig.sleepBetweenWallets[1])
                    logger.info(`Waiting ${waitingTime}s before next wallet...`)
                    await sleep(waitingTime * 1000)
                } else {
                    throw new Error('Error')
                }
            } catch (e) {
                if (isBalanceError(e)) {
                    logger.error(`${walletAddress} | Not enough balance`)
                    isSuccess = true
                    return
                } else {
                    logger.error(`${walletAddress} | Error: ${e}`)
                }

                if (retryCount <= 3) {
                    logger.warn(`${walletAddress} | Wait 30 sec and retry swap ${retryCount}/3`)
                    retryCount++
                    await sleep(30 * 1000)
                } else {
                    isSuccess = true
                    logger.error(`${walletAddress} | Deposit unsuccessful, skip`)
                }
            }
        }
    }

    const depositEth = async () => {
        const ezEthBalance = await getTokenBalance(arbClient, ezEthAddress, walletAddress)
        let amount = 0n

        if (generalConfig.depositEthMode === 1) {
            const randomPercent = random(generalConfig.depositEthPercent[0], generalConfig.depositEthPercent[1]) / 100
            amount = BigInt(Math.round(Number(ezEthBalance) * randomPercent))
        } else if (generalConfig.depositEthMode === 2) {
            const randomAmount = randomFloat(generalConfig.depositEthAmount[0], generalConfig.depositEthAmount[1]).toFixed(18)
            amount = parseEther(`${randomAmount}`)
        } else throw new Error('Set depositEthMode from 1 or 2')

        if (ezEthBalance !== 0n) {
            await makeDepositTransaction(amount)
        } else logger.error(`${walletAddress} | Wallet have no ezEth. Skip`)
    }

    return {depositEth}
}