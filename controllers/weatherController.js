const axios = require('axios');
const { weatherApiKey, weatherApiUrl } = require('../config/config');

async function getWeatherByCity(city) {
    try {
        const response = await axios.get(weatherApiUrl, {
            params: {
                q: city,
                appid: weatherApiKey,
                units: 'metric',
                lang: 'ru'
            }
        });
        
        const { temp, humidity } = response.data.main;
        const weatherDescription = response.data.weather[0].description;

        return `Температура: ${temp}°C\nВлажность: ${humidity}%\nОписание: ${weatherDescription}`;
    } catch (error) {
        return 'Не удалось получить данные о погоде. Убедитесь, что город указан правильно.';
    }
}


module.exports = { getWeatherByCity };
