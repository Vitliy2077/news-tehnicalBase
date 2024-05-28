document.getElementById('name_text_home').addEventListener('click', function() {
    var linkContainer = document.getElementById('home-button');
    if (linkContainer.classList.contains('home_button')) {
        linkContainer.classList.remove('home_button'); // Показываем контейнер
    } else {
        linkContainer.classList.add('home_button'); // Скрываем контейнер
    }
});


document.addEventListener('click', function(event) {
    var linkContainer = document.getElementById('home-button');
    var toggleButton = document.getElementById('name_text_home');
    

    // Проверяем, был ли клик вне контейнера и кнопки
    if (!linkContainer.contains(event.target) && !toggleButton.contains(event.target)) {
        linkContainer.classList.add('home_button'); // Скрываем контейнер
    }
});

