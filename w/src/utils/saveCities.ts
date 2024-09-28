import {getKeyValue, saveKeyValue, tokenDictionary} from "../domain/storage.service.js";
import {printError, printSuccess} from "../domain/log.service.js";

export const saveCity = async (city: string[] | string) => {
    if (!city.length) {
        printError('Не передан ни один город!')
        return;
    }
    try {
        const existingCities = await getKeyValue(tokenDictionary.city) || [];
        const updatedCities = Array.from(new Set([...existingCities, ...city]));
        await saveKeyValue(tokenDictionary.city, updatedCities);
        printSuccess('города сохранены')
    } catch (e: unknown) {
        printError(e as string)
    }
}