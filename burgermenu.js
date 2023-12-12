document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const menuList = document.querySelector('.menu');

    burgerMenu.addEventListener('click', function () {
        this.classList.toggle('active');
        menuList.classList.toggle('active');
    });
});