let smenuItem = document.querySelector(".smenu__item");
let click = 0;

smenuItem.addEventListener("click", function (e) {
    e.preventDefault();
    smenuItem.classList.add("smenu__item_active");
    click++;
    if(click == 2){
        click = 0;
        smenuItem.classList.remove("smenu__item_active");
    }
});

