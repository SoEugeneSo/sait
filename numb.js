document.addEventListener("DOMContentLoaded", function () {
    // Добавляем обработчик клика для выделения номера телефона
    var supportNumber = document.getElementById('supportNumber');

    supportNumber.addEventListener('click', function () {
        supportNumber.classList.add('visited');
    });
});