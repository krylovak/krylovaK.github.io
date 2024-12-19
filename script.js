window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // Текущая позиция прокрутки
    const rectangle = document.querySelector('.anim');

    // Изменяем высоту прямоугольника в зависимости от позиции прокрутки
    rectangle.style.height = `${100 + scrollPosition / 5}px`;
});