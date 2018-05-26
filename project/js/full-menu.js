"use strict";
(function () {
let mainContent = document.querySelector('.wrapper');
let ham = document.querySelector(".hamburger");
let template = document.querySelector('#fullMenu').innerHTML;
let overlay = createOverlay(template);


ham.addEventListener("click", function () {
    overlay.open();
    initEvent();
});


function createOverlay(template) {
    let fragment = document.createElement('div');

    fragment.innerHTML = template;

    let fullMenu = fragment.querySelector(".full-menu");
    let closeMenu = fragment.querySelector(".full-menu__close");
    let list = fragment.querySelector('.full-menu__list');

    fragment = null;
  ;
    closeMenu.addEventListener('click', function () {
        mainContent.removeChild(fullMenu);
    });

    list.addEventListener('click',function (e) {
        if (e.target.classList.contains('full-menu__link')) {
            mainContent.removeChild(fullMenu);
        }
    });

    return {
        open() {
            mainContent.insertBefore(fullMenu, mainContent.firstChild);
        }
    }
}
}());