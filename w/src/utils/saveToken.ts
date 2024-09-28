import {printError, printSuccess} from "../domain/log.service.js";
import {saveKeyValue, tokenDictionary} from "../domain/storage.service.js";

export const saveToken = async (token: string) => {
    if (!token.length) {
        printError('Не передан токен!')
        return;
    }
    try {
        await saveKeyValue(tokenDictionary.token, token);
        printSuccess('токен сохранен')
    } catch (e: unknown) {
        printError(e as string)
    }
}