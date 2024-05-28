// Замените 'YOUR_CHANNEL_ID' и 'YOUR_BOT_API_KEY' на свои значения
const channelId = 'YOUR_CHANNEL_ID';
const apiKey = 'YOUR_BOT_API_KEY';

// Функция для получения новостей из Telegram канала
async function getTelegramNews() {
    try {
        const response = await fetch(`https://api.telegram.org/bot${apiKey}/getUpdates`);
        const data = await response.json();
        const messages = data.result;

        const newsContainer = document.getElementById('news-container');
        newsContainer.innerHTML = ''; // Очищаем контейнер перед загрузкой новых новостей

        messages.forEach(message => {
            if (message.message && message.message.chat.id == channelId && message.message.text) {
                const newsItem = document.createElement('div');
                newsItem.classList.add('news-item');
                newsItem.textContent = message.message.text;
                newsContainer.appendChild(newsItem);
            }
        });
    } catch (error) {
        console.error('Ошибка при получении новостей:', error);
    }
}

// Вызываем функцию получения новостей при загрузке страницы
window.onload = getTelegramNews;
