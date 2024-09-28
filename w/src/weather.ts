import {HTTP_STATUSES, isAPIError} from "./models/types.errors.js";
import {getKeyValue, tokenDictionary} from "./domain/storage.service.js";
import {getWeather} from "./domain/api.service.js";
import {printError, printHelp, printWeather} from "./domain/log.service.js";
import {getArgs} from "./helpers/args.js";
import {saveCity} from "./utils/saveCities.js";
import {saveToken} from "./utils/saveToken.js";
import {setLanguage} from "./domain/lang.service.js";
import {SETTINGS} from "./settings.js";

export const getForCast = async () => {
    try {
        const city = SETTINGS.city ? SETTINGS.city.split(' ') : await getKeyValue(tokenDictionary.city);

        for (const cityElement of city) {
            const weather = await getWeather(cityElement.trim());
            printWeather(weather);
            console.log(weather);
        }
        return;

    } catch (error) {
        if (isAPIError(error)){
            if (error.response?.status === HTTP_STATUSES.NOT_FOUND_404){
                printError('неверно указан город');
            }
            if (error.response?.status === HTTP_STATUSES.NOT_AUTHORIZATION_401){
                printError('неверно указан токен');
            }
            printError('серверная ошибка');
        }
        console.log('непредвиденная ошибка: ' + error)
        return;
    }
}

const initCLI = () => {
    const args = getArgs(process.argv);

    if (args.h) {
        return printHelp();
    }

    if (args.s) {
        return saveCity(args.s as string);
    }

    if (args.t) {
        return saveToken(args.t as string);
    }

    if (args.l) {
        return setLanguage(args.l as string);
    }

    return getForCast();
};

initCLI();