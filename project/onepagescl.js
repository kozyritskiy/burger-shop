(function(){
    let pos;
    inscroll = false;
    let main = document.querySelector(".maincontent");
    let items = main.children;
    let navList = document.querySelector(".nav-sidebar__list");
    let itemsCircle = navList.children;


    main.addEventListener("wheel", function (e) {
        e.preventDefault();

        let active = document.querySelector(".active");
        let activeCircleItem = document.querySelector(".active-circle");
        let nextActEl = active.nextElementSibling;
        let prevActEl = active.previousElementSibling;
        let nextActCircle = activeCircleItem.nextElementSibling;
        let prevActCircle = activeCircleItem.previousElementSibling;

        let activeCircleAttr = activeCircleItem.getAttribute('data-number');
        let aCa = parseInt(activeCircleAttr);

        let activeSection = activeClass();

        if (!inscroll) {
            inscroll = true;

            if (e.deltaY > 0) {
                if (!items[items.length-1].classList.contains('active')) {
                    activeSection.next();
                }

            }else {
                if(!items[0].classList.contains('active')){
                    activeSection.prev();
                }
            }
        }


        scroll(aCa);

        function activeClass(){
            return{
                next(){
                    nextActEl.classList.add('active');
                    active.classList.remove('active');
                    nextActCircle.classList.add('active-circle');
                    activeCircleItem.classList.remove('active-circle');

                },
                prev(){
                    prevActEl.classList.add('active');
                    active.classList.remove('active');
                    prevActCircle.classList.add('active-circle');
                    activeCircleItem.classList.remove('active-circle');
                }
            }
        }
    });


    navList.addEventListener("click", function (e) {

        if (e.target.classList.contains('inner-circle')) {

            let current = e.target;
            let parentItem = current.parentNode;
            let attr = parentItem.getAttribute('data-number');
            let count = parseInt(attr);

            scroll(count);

            removeActiveCircle();
            parentItem.classList.add('active-circle');


            removeActiveSection();
            items[count].classList.add('active');
        }
    });


    function scroll(count){

        pos = 100*count;
        pos = pos +'%';
        main.style.bottom = pos;

        setTimeout(function () {
            inscroll = false;
        }, 1300);
    }

    function removeActiveCircle(){
        for (let i = 0; i < itemsCircle.length; i++) {
            if (itemsCircle[i].classList.contains('active-circle')) {
                itemsCircle[i].classList.remove('active-circle');
            }
        }
    }

    function removeActiveSection(){
        for (let i = 0; i < items.length; i++) {
            if (items[i].classList.contains('active')) {
                items[i].classList.remove('active')
            }
        }
    }

}());