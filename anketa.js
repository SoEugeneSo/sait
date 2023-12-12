document.addEventListener("DOMContentLoaded", function () {
    // Получаем общую сумму из sessionStorage
    var totalAmount = parseInt(sessionStorage.getItem('totalAmount')) || 0;

    // Проверяем, чтобы убедиться, что значение существует
    if (totalAmount) {
        // Используйте totalAmount по вашему усмотрению, например, отобразите его на странице
        var totalAmountElement = document.getElementById('totalAmount');
        totalAmountElement.innerText = 'Общая сумма: ' + totalAmount + ' руб.';
    }
});
function checkAge() {
    var dobInput = document.getElementById('birthdate');
    var resultMessage = document.getElementById('result');
  
    if (dobInput.checkValidity()) {
      var dob = new Date(dobInput.value);
      var currentDate = new Date();
  
      var age = currentDate.getFullYear() - dob.getFullYear();
  
      // Проверка, что пользователь старше 16 лет
      if (age >= 16) {
        resultMessage.textContent = "Ваш возраст: " + age + " лет. Доступ разрешен.";
      } else {
        resultMessage.textContent = "Вам должно быть 16 лет или больше для доступа.";
      }
    } else {
      resultMessage.textContent = "Пожалуйста, введите корректную дату рождения.";
    }
  }
function validateForm(event) {
    // Предотвращаем перезагрузку страницы по умолчанию
    event.preventDefault();

    // Получаем элемент для отображения ошибок и сообщений об успешной операции
    var errorMessageElement = document.getElementById('errorMessage');
    var successMessageElement = document.getElementById('successMessage');
    var operationMessageElement = document.getElementById('operationMessage');
    
    // Очищаем предыдущие сообщения об ошибке и успешной операции
    errorMessageElement.innerHTML = '';
    successMessageElement.innerHTML = '';

    // Проверка заполненности всех обязательных полей
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var birthdate = document.getElementById('birthdate').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var fileInput = document.getElementById('fileInput').value;

    if (!firstName || !lastName || !birthdate || !phone || !validatePhone(phone) || !email || !validateEmail(email) || !fileInput) {
        // Выводим сообщение об ошибке
        errorMessageElement.innerText = 'Пожалуйста, заполните все обязательные поля корректно и прикрепите файл.';
    } else {
        // Отображаем сообщение об успешной операции
        operationMessageElement.style.display = 'block'; // Показываем сообщение

        // Ждем 2 секунды перед переходом
        setTimeout(function () {
            // Перенаправляем пользователя на страницу success.html
            window.location.href = 'mainpage.html';
        }, 2000);
    }
}
function validatePhone(phone) {
    // Проверка формата телефона
    var phoneRegex = /\+7\d{10}/;
    return phoneRegex.test(phone);
}

function validateEmail(email) {
    // Проверка формата email
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
