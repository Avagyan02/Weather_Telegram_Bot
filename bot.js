const TelegramBot = require('node-telegram-bot-api');
const { telegramApiKey } = require('./config/config');
const { getWeatherByCity } = require('./controllers/weatherController');

const bot = new TelegramBot(telegramApiKey, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const city = msg.text.trim();

    if (!city) {
        return bot.sendMessage(chatId, 'Пожалуйста, введите название города.');
    }

    const weatherInfo = await getWeatherByCity(city);
    bot.sendMessage(chatId, weatherInfo);
});

bot.on('polling_error', (error) => console.log(error));
