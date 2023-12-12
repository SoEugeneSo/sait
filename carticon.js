var cartItems = [];
var totalAmount = parseInt(sessionStorage.getItem('totalAmount')) || 0;

document.addEventListener('DOMContentLoaded', function () {
    initializePage();
    var totalQuantity = 0;
    updateBuyButtonState();

    // Ваш код обработчиков событий и другие функции
});
function getProductById(productId) {
    // Замените этот блок кода на ваш реальный механизм получения продукта по его идентификатору
    if (productId === 1) {
        return {
            name: "Озвучка за минуту",
            price: 100
        };
    }
    if (productId === 2) {
        return {
            name: "Озвучка фильма",
            price: 4500
        };
    }
    if (productId === 3) {
        return {
            name: "Озвучка за 5 минут",
            price: 375
        };
    }
    if (productId === 4) {
        return {
            name: "Озвучка аниме 1 серия",
            price: 1000
        };
    }
    if (productId === 5) {
        return {
            name: "Озвучка поздравления",
            price: 50
        };
    }
    if (productId === 6) {
        return {
            name: "Спеть песню",
            price: 700
        };
    }
    if (productId === 7) {
        return {
            name: "Звукорежиссёр на серию",
            price: 600
        };
    }
    if (productId === 8) {
        return {
            name: "Заказ аниме на сезон",
            price: 7000
        };
    }
    if (productId === 9) {
        return {
            name: "Запись аудиокниги, 1 глава",
            price: 250
        };
    }
    // Замените этот блок кода на ваш реальный механизм получения продукта по его идентификатору
}
function canBuy() {
    return cartItems.length > 0;
}
// Обновляем состояние кнопок при изменении корзины
function updateBuyButtonState() {
    var buyButtons = document.querySelectorAll('.add');
    buyButtons.forEach(function (button) {
        button.disabled = !canBuy();
    });
}
function redirectToAnketa() {
    if (canBuy()) {
        window.location.href = 'anketa.html';
    } else {
        // Корзина пуста, вы можете добавить здесь сообщение пользователю или другую логику
        alert('Ваша корзина пуста. Добавьте товары перед оформлением заказа.');
        // Перезагрузка страницы
        location.reload();
    }
}
// Добавьте следующий код:
var totalAmountElement = document.createElement('div');
totalAmountElement.classList.add('cart-item', 'total');
var totalAmount = cartItems.reduce((total, item) => total + item.quantity * getProductById(item.productId).price, 0);
totalAmountElement.textContent = 'Общая стоимость: ' + totalAmount + ' руб.';
function clearCart() {
    cartItems = []; // Очищаем массив корзины
    updateCartCount(); // Обновляем счетчик корзины
    updateCartItems(); // Обновляем отображение корзины
    hideCartItems(); // Скрываем элементы корзины
    document.querySelectorAll('.product-quantity').forEach(function (quantityElement) {
        quantityElement.textContent = '0';
    });
}
function updateCartItems() {
    var cartItemsContainer = document.getElementById('cartItemsContainer');
    cartItemsContainer.innerHTML = '';

    var totalCost = 0;

    cartItems.forEach(item => {
        if (item.quantity > 0) {
            var productDiv = document.createElement('div');
            productDiv.classList.add('cart-item');

            var productName = document.createElement('span');
            var product = getProductById(item.productId);
            productName.textContent = product.name;

            var productQuantity = document.createElement('span');
            productQuantity.textContent = ' x ' + item.quantity;

            var productPrice = document.createElement('span');
            var productTotalPrice = item.quantity * product.price;
            productPrice.textContent = ' = ' + productTotalPrice + ' руб.';
            totalCost += productTotalPrice;

            productDiv.appendChild(productName);
            productDiv.appendChild(productQuantity);
            productDiv.appendChild(productPrice);

            cartItemsContainer.appendChild(productDiv);
        }
    });

    var totalCostElement = document.createElement('div');
    totalCostElement.textContent = 'Общая сумма: ' + totalCost + ' руб.';
    cartItemsContainer.appendChild(totalCostElement);
    document.querySelector('.cart-count').innerText = cartItems.reduce((total, item) => total + item.quantity, 0);
    updateBuyButtonState();
}
function updateProductQuantity(productId, quantity) {
    // Найдем элемент с классом product-quantity для указанного продукта
    var quantityElement = document.querySelector('.product[data-id="' + productId + '"] .product-quantity');
    
    // Обновим количество продуктов
    if (quantityElement) {
        quantityElement.textContent = quantity;
    }
}
function addToCart(productId) {
    var existingProduct = cartItems.find(item => item.productId === productId);

    if (existingProduct) {
        if (existingProduct.quantity < 9) {
            existingProduct.quantity += 1;
        } else {
            // Достигнут максимальный лимит
            alert("Достигнут максимальный лимит для данного продукта.");
        }
    } else {
        cartItems.push({
            productId: productId,
            quantity: 1
        });
    }

    updateCartCount();
    updateCartItems();
    updateProductQuantity(productId, existingProduct ? existingProduct.quantity : 1);
    var totalAmount = cartItems.reduce((total, item) => total + item.quantity * getProductById(item.productId).price, 0);
    sessionStorage.setItem('totalAmount', totalAmount);

    // Обновляем элемент с общей суммой на странице
    updateTotalAmount();
    updateBuyButtonState();
}
function updateTotalAmount() {
    var totalAmountElement = document.getElementById('totalAmount');
    totalAmount = cartItems.reduce((total, item) => total + item.quantity * getProductById(item.productId).price, 0);
    totalAmountElement.textContent = 'Общая стоимость: ' + totalAmount + ' руб.';

    // Сохраняем обновленное значение в sessionStorage
    sessionStorage.setItem('totalAmount', totalAmount);
}

// Вызываем функцию для установки начального значения
updateCartCount();
function removeFromCart(productId) {
    var existingProduct = cartItems.find(item => item.productId === productId);

    if (existingProduct && existingProduct.quantity > 0) {
        existingProduct.quantity -= 1;

        if (existingProduct.quantity === 0) {
            // Если количество стало 0, удаляем продукт из массива
            cartItems = cartItems.filter(item => item.productId !== productId);
        }

        updateCartCount();
        updateCartItems();
        updateProductQuantity(productId, existingProduct.quantity);
        updateTotalAmount();
        updateBuyButtonState();

        var totalAmount = cartItems.reduce((total, item) => total + item.quantity * getProductById(item.productId).price, 0);
        sessionStorage.setItem('totalAmount', totalAmount);
    }
}
function updateBuyButtonState() {
    var buyButtons = document.querySelectorAll('.add');
    buyButtons.forEach(function (button) {
        button.disabled = !canBuy();
    });
}

function canBuy() {
    return cartItems.length > 0;
}

function clearCartAndReload() {
    clearCart(); // Очищаем корзину
    location.reload(); // Перезагружаем страницу
}

function showCartItems() {
    var cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.style.display = 'block';
}

function hideCartItems() {
    var cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.style.display = 'none';
}
function updateCartCount() {
    var totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    var cartItemsContainer = document.getElementById('cartItemsContainer');

    // Создаем элемент для общей стоимости
    var totalAmountElement = document.createElement('div');
    totalAmountElement.classList.add('cart-item', 'total');
}

// Вызываем функцию для установки начального значения
updateCartCount();

function resetCartOpacity() {
    var cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.style.transition = 'opacity 0.3s, top 0.3s'; // добавляем анимацию
    cartItemsContainer.style.opacity = '0';
    cartItemsContainer.style.top = '0';
}

function showCartItems() {
    var cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.style.transition = 'opacity 0.3s, top 0.3s'; // добавляем анимацию
    cartItemsContainer.style.display = 'block';
    cartItemsContainer.style.opacity = '1';
    cartItemsContainer.style.top = '50px';
}

function hideCartItems() {
    var cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.style.transition = 'opacity 0.3s, top 0.3s'; // добавляем анимацию
    cartItemsContainer.style.opacity = '0';
    cartItemsContainer.style.top = '0';
}
document.querySelectorAll('.add').forEach(function (button) {
    button.addEventListener('click', function () {
        var productId = this.dataset.id;
        addToCart(productId);
        resetCartOpacity();
    });
});

// Ваш обработчик клика для кнопки удаления
document.querySelectorAll('.remove').forEach(function (button) {
    button.addEventListener('click', function () {
        var productId = this.dataset.id;
        removeFromCart(productId);
        resetCartOpacity();
    });
});
// Добавьте этот обработчик для сброса opacity при уходе курсора с .cart-container

// Вызываем функцию для установки начального значения
updateCartCount();