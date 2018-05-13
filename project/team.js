"use strict";

let teamList = document.querySelector(".teammates__list");

teamList.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains('teammate__name')) {
        let current = e.target;
        let teammate = current.parentNode;
        let item = teammate.parentNode;
        let list = item.parentNode;
        let items = list.children;
        let teammateInfo = current.nextElementSibling;
        console.log(teammateInfo);
        let teammateInfoHeight = teammateInfo.firstElementChild.clientHeight;
        console.log(teammateInfoHeight);

        //teammateInfo.style.height = teammateInfoHeight + 'px';
        if(!teammate.classList.contains('teammates__item_active')){
            for (let i = 0; i < items.length; i++){
                items[i].classList.remove('teammates__item_active');
                items[i].lastElementChild.style.height = 0;


            }
            item.classList.add('teammates__item_active');
            teammateInfo.style.height = teammateInfoHeight + 'px';
        }
    }
})



