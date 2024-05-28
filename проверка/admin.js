document.getElementById('news-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const formData = new FormData(this);
    const newsData = {};
    formData.forEach((value, key) => {
        newsData[key] = value;
    });

    // Создание нового блока новостей на основной странице
    addNewsBlock(newsData);

    // Очистка формы после добавления новости
    this.reset();
});

function addNewsBlock(newsData) {
    const newsContainer = document.getElementById('news');
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');

    const titleElement = document.createElement('h2');
    titleElement.textContent = newsData.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = newsData.description;

    const linkElement = document.createElement('a');
    linkElement.href = newsData.link;
    linkElement.textContent = 'Read more';

    newsItem.appendChild(titleElement);
    newsItem.appendChild(descriptionElement);
    newsItem.appendChild(linkElement);

    newsContainer.appendChild(newsItem);
}
