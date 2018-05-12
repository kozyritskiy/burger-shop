"use strict";

let ham = document.querySelector(".hamburger");
let fullMenu = document.querySelector(".full-menu");
let closeMenu = document.querySelector(".full-menu__close");

ham.addEventListener("click", function (e) {
    fullMenu.classList.remove("visuallyhidden");
    ham.classList.add("visuallyhidden");
});

closeMenu.addEventListener("click", function (e) {
    fullMenu.classList.add("visuallyhidden");
    ham.classList.remove("visuallyhidden");
});

