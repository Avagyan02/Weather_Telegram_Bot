require('dotenv').config();

module.exports = {
    telegramApiKey: process.env.TELEGRAM_API_KEY,
    weatherApiKey: process.env.WEATHER_API_KEY,
    weatherApiUrl: process.env.WEATHER_API_URL
};
