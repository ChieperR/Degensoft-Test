export const generalConfig = {
    // Значения в квадратных скобках указаны как [от, до]
    // Задержки указаны в секундах
    sleepBetweenWallets: [30, 60], // Задержка между кошельками
    sleepAfterApprove: [10, 30], // Задержка после аппрува ezEth
    depositEthPercent: [20, 30], // Процент ezEth для депозита
    depositEthAmount: [0.0001, 0.0003], // Количество ezETH для депозита
    maxGas: 100, // Максимум газа на эфире, при котором будет работать скрипт

    approveMode: 2,
    // 1 - Approve exact tokens amount
    // 2 - Approve x3 from tokens amount
    // 3 - Approve unlimited
    depositEthMode: 2,
    // 1 − In percent
    // 2 - In ezETH
    isRandomWallets: false, // Рандомизировать кошельки − true, идти по порядку − false

    decryptPassword: '' // Пароль для дешифрования кошельков
}