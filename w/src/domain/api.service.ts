import {getKeyValue, tokenDictionary} from "./storage.service.js";
import axios from "axios";
import {SETTINGS} from "../settings.js";

export const getWeather = async (city: string = 'moscow') => {
    const token = SETTINGS.token ?? await getKeyValue(tokenDictionary.token);

    if(!token){
        throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]');
    }

    const { data } = await axios.get(SETTINGS.weatherURL, {
        params : {
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    });

    return data;

};