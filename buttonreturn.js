document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.onscroll = function () {
        showHideScrollBtn();
    };

    function showHideScrollBtn() {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollPosition > 100) {
            scrollToTopBtn.style.bottom = "20px";
        } else {
            scrollToTopBtn.style.bottom = "-50px";
        }
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}