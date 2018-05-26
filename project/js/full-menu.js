"use strict";
(function () {
let mainContent = document.querySelector('.maincontent');
let ham = document.querySelector(".hamburger");
let template = document.querySelector('#fullMenu').innerHTML;
let overlay = createOverlay(template);

ham.addEventListener("click", function () {
    overlay.open();
});

function createOverlay(template) {
    let fragment = document.createElement('div');

    fragment.innerHTML = template;

    let fullMenu = fragment.querySelector(".full-menu");
    let closeMenu = fragment.querySelector(".full-menu__close");

    fragment = null;

    closeMenu.addEventListener('click', function () {
        mainContent.removeChild(fullMenu);
    });

    return {
        open() {
            mainContent.insertBefore(fullMenu, mainContent.firstChild);
        }
    }
}
}());