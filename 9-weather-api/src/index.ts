import {config} from 'dotenv'
import {app} from "./app";
import {SETTINGS} from "./settings";
config()

const startApp = async () => {
    app.listen(SETTINGS.PORT, () => {
        console.log(`Сервер запущен на порту:${SETTINGS.PORT}`);
    });
};

startApp();