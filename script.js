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






let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("family");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}
