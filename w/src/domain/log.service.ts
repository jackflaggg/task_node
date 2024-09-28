import chalk from 'chalk'
import dedent from 'dedent'

export const printError = (error: string) => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error)
}

export const printSuccess = (msg: string) => {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + msg)
}

export const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')} 
        Без параметров - вывод погоды
        -s [CITY] для установки города
        -h для вывода помощи
        -t [API_KEY] для сохранения токена`
    );
};

export const printWeather = (res: any) => {
    console.log(
        dedent`${chalk.bgBlue(' WEATHER ')} Погода в городе ${res.name}
        Температура: ${res.main.temp} (ощущается как ${res.main.feels_like})
        Влажность: ${res.main.humidity}%
        Скорость ветра: ${res.wind.speed}`
    );
}