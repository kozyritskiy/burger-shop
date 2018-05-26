(function () {
    let list = document.querySelector('.burgers__list');
    let slider = document.querySelector('.burgers');
    let slideWidth = slider.clientWidth;
    let items = list.children.length;
    let listWidth = slideWidth * items;
    let sliderContainer = document.querySelector('.slider');

    let slidePosition = 0;
    let minPos = 0;
    let maxPos = listWidth - slideWidth;

    list.style.width = listWidth + 'px';
    list.style.right = slidePosition;

    sliderContainer.addEventListener('click', function (e) {
        e.preventDefault();

        if (e.target.classList.contains('right-arrow__icon')) {
            if (slidePosition < maxPos) {
                slidePosition += slideWidth;
                list.style.right = slidePosition + 'px';
            }
        } else if (e.target.classList.contains('left-arrow__icon')) {
            if (slidePosition > minPos) {
                slidePosition -= slideWidth;
                list.style.right = slidePosition + 'px';
            }
        }
    });
}());