import {Hex} from "viem";
import {generalConfig} from "../config";
import CryptoJS from 'crypto-js';

export const decryptPrivateKey = (encryptedPrivateKey: string): Hex => {
    if (!generalConfig.decryptPassword) throw new Error('Введите пароль для дешифрования в config.ts')
    // Определение формата кодирования
    const isUtf8 = encryptedPrivateKey.startsWith("UTF8");
    const ciphertext = isUtf8 ? encryptedPrivateKey.slice(4) : encryptedPrivateKey;

    // Процесс генерации ключа из пароля с использованием PBKDF2
    const key = CryptoJS.PBKDF2(generalConfig.decryptPassword, CryptoJS.SHA256(generalConfig.decryptPassword), { keySize: 256 / 32 });

    // Дешифрование ключа с помощью AES
    const decrypted = CryptoJS.AES.decrypt(ciphertext, key, { mode: CryptoJS.mode.ECB });

    // Преобразование дешифрованного ключа в строку
    let privateKey;
    if (isUtf8) {
        privateKey = decrypted.toString(CryptoJS.enc.Utf8);
    } else {
        privateKey = decrypted.toString(CryptoJS.enc.Hex);
    }

    if (privateKey.startsWith("00")) {
        privateKey = "0x" + privateKey.slice(2);
    } else {
        privateKey = "0x" + privateKey
    }

    if (privateKey.length === 66) return privateKey as Hex
    throw new Error('Неверный пароль для дешифрования')
}