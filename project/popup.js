let reviewsList = document.querySelector('.reviews__list');
let reviews = document.querySelector('.reviews');
let template = document.querySelector('#overlayTemplate').innerHTML;
let overlay = createOverlay(template);

function createOverlay(template) {
    let fragment = document.createElement('div');

    fragment.innerHTML = template;

    let wrapOverlayElement = fragment.querySelector('.wrap-overlay');
    let overlayElement = fragment.querySelector('.overlay');
    let closeElement = fragment.querySelector('.cross_message');
    let messageReview = fragment.querySelector('.message__review');
    let messageName = fragment.querySelector('.message__name');

    fragment = null;

    wrapOverlayElement.addEventListener('click',function (e) {
        if(e.target === overlayElement){
            closeElement.click();
        }
    });

    closeElement.addEventListener('click',function () {
        reviews.removeChild(wrapOverlayElement);
    });

    reviewsList.addEventListener("click", function (e) {
        e.preventDefault();
        if (e.target.classList.contains('button_review') || e.target.classList.contains('button_mobile')){

            let current = e.target;
            let reviewBButton = current.parentNode;
            let content = reviewBButton.parentNode;
            let nameContent = content.firstElementChild.innerHTML;
            let name = content.firstElementChild;
            let description = name.nextElementSibling.innerHTML;

            messageName.innerHTML = nameContent;
            messageReview.innerHTML = description;

            reviews.insertBefore(wrapOverlayElement, reviews.firstChild);
        }
    });
};