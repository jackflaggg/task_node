export const formatWeatherData = (data: any) => {
    const {
        Name,
        Main: { temp, feels_like, temp_min, temp_max, humidity },
        Weather: [{ description }],
        Wind: { speed, deg },
        Sys: { country },
    } = data;

    return `
🌍 Погода в городе: ${Name}, ${country}
🌡 Температура: ${temp}°C (ощущается как ${feels_like}°C)
🧊 Минимальная температура: ${temp_min}°C
🔥 Максимальная температура: ${temp_max}°C
💧 Влажность: ${humidity}%
🌬 Скорость ветра: ${speed} м/с
☁️ Описание: ${description.charAt(0).toUpperCase() + description.slice(1)}
`;
};