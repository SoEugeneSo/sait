document.addEventListener("DOMContentLoaded", function () {
    var arrowBtn = document.querySelector(".arrow");
    arrowBtn.addEventListener("click", function () {
      navigateToPage("zakaz.html");
    });
  
    function navigateToPage(page) {
      window.location.href = page;
    }
  });