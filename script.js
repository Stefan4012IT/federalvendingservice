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


document.addEventListener("DOMContentLoaded", function () {
    // Selektujemo mobile-nav-box i mobile-nav
    var mobileNavBox = document.querySelector('.mobile-nav-box');
    var mobileNav = document.querySelector('.mobile-nav');
    var mobileNavClose = document.querySelector('.mobile-nav-line-box');
    var body = document.querySelector('body');
    var heroPage = document.querySelector('.hero-page');

    // Proveravamo da li elementi postoje
    if (mobileNavBox && mobileNav && mobileNavClose) {
        // Dodajemo event listener za klik na mobile-nav-box
        mobileNavBox.addEventListener('click', function () {
            // Toggling display stila na mobile-nav
            if (mobileNav.style.display === "none" || mobileNav.style.display === "") {
                mobileNav.style.display = "flex";
                mobileNav.style.animation = "nav-animation-show 1s forwards";
                body.style.overflowY = "hidden";
                heroPage.style.height = '100vh';
            } else {
                mobileNav.style.display = "none";
            }
        });

        mobileNavClose.addEventListener('click', function () {
            mobileNav.style.animation = "nav-animation-close 1s forwards";
            body.style.overflowY = "auto";
            heroPage.style.height = 'revert-layer';
        })
    }
});