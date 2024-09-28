import {Request, Response} from 'express';
import axios from "axios";
import {SETTINGS} from "../settings";
import {formatWeatherData} from "../utils/renderWeather";
export const getWeatherController = async (req: Request, res: Response) => {
    const city = req.params.city;

    try {
        const url = (SETTINGS.PATH.WEATHER);
        const response = await axios.get(url, {
            params : {
                q: city,
                appid: SETTINGS.API_KEY,
                // lang: 'ru',
                // units: 'metric'
            }
        });
        const renderData = formatWeatherData(response.data);
        res
            .status(200)
            .send(response.data)
        return;
    } catch (e: unknown){
        res
            .status(500)
            .send('Ошибка получения данных о погоде');
        return;
    }
}