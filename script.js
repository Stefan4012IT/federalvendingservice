document.addEventListener("DOMContentLoaded", function () {
    var buttonLft = document.querySelector('.button .btn-border-left');
    var buttonRght = document.querySelector('.button .btn-border-right');
    buttonLft.classList.add('intro-animate');
    buttonRght.classList.add('intro-animate');

    // Uklanjanje klase nakon završetka animacije
    setTimeout(function () {
        buttonLft.classList.remove('intro-animate');
        buttonRght.classList.remove('intro-animate');
    }, 2500); // 1.5s delay + 1s animation duration
});