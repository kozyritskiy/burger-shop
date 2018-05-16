let smenuList = document.querySelector(".smenu__list");

smenuList.addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.classList.contains('smenu__trigger')) {
        let current = e.target;
        let item = current.parentNode;
        let list = item.parentNode;
        let items = list.children;
        let content = current.nextElementSibling;
        let contentHeight = content.firstElementChild.clientHeight;

        if (!item.classList.contains('smenu__item_active')) {
            for (let i = 0; i < items.length; i++) {
                items[i].classList.remove('smenu__item_active');
            }
            item.classList.add('smenu__item_active');
            mobileMediaRequest(window.matchMedia("(max-width: 480px)").matches)
                .then(function () {
                    for (let i = 0; i < items.length; i++) {
                        if (!items[i].classList.contains('smenu__item_active')) {
                            items[i].classList.add("visuallyhidden");
                        }
                    }
                    console.log('win');
                });
        } else {
            item.classList.remove('smenu__item_active');
            mobileMediaRequest(window.matchMedia("(max-width: 480px)").matches)
                .then(function () {
                    for (let i = 0; i < items.length; i++) {
                        setTimeout(function () {
                            items[i].classList.remove("visuallyhidden");
                        },1000);

                    }
                    console.log('win again');
                });
        }
    }
});

function mobileMediaRequest(width) {
    let promise = new Promise(function (resolve) {
        if (width) {
            resolve();
        }
    });
    return promise;
}

