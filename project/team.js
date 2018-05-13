"use strict";

let teamList = document.querySelector(".teammates__list");

teamList.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains('teammate__name')) {
        let current = e.target;
        let item = current.parentNode;
        let list = item.parentNode;
        let items = list.children;
        let teammateInfo = current.nextElementSibling;
        let teammateInfoHeight = teammateInfo.firstElementChild.clientHeight;

        if(!item.classList.contains('teammates__item_active')){
            for (let i = 0; i < items.length; i++){
                items[i].classList.remove('teammates__item_active');
                items[i].lastElementChild.style.height = 0;
            }
            item.classList.add('teammates__item_active');
            teammateInfo.style.height = teammateInfoHeight + 'px';
        } else{
            item.classList.remove('teammates__item_active');
            teammateInfo.style.height = 0;
        }
    }
});



