import {printError, printSuccess} from "./log.service.js";
import {saveKeyValue, tokenDictionary} from "./storage.service.js";

export const setLanguage = async (lang: string = 'en') => {
    if (lang !== 'en' && lang !== 'ru') {
        printError('Поддерживаются только языки: en, ru');
        return;
    }
    await saveKeyValue(tokenDictionary.language, lang);
    return printSuccess(`Язык установлен на ${lang === 'en' ? 'английский' : 'русский'}`);
};
