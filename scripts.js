document.addEventListener("DOMContentLoaded", function () {
  var scrollToBtn = document.querySelector(".page-number");
  var arrowBtn = document.querySelector(".arrow");

  scrollToBtn.addEventListener("click", function () {
      scrollToTop();
  });

  arrowBtn.addEventListener("click", function () {
      navigateToPage("zakaz2.html");
  });

  // Проверка, была ли страница загружена первый раз

  function scrollToTop() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  }

  function navigateToPage(page) {
      window.location.href = page;
  }
});