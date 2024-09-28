import {config} from 'dotenv'
config()

export const SETTINGS = {
    PORT: process.env.PORT || 8000,
    PATH: {
        WEATHER: 'https://api.openweathermap.org/data/2.5/weather',
    },
    API_KEY: process.env.API_KEY
}