const sections = $('.section');
const display = $('.maincontent');
let inscroll = false;

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

sections.filter(':first-child').addClass('active');

const performTransition = (sectionEq) => {
    if (inscroll) return;
    inscroll = true;

    const position = (sectionEq * -100) + '%';

    sections.eq(sectionEq).addClass('active')
        .siblings().removeClass('active');

    display.css({
        'transform': `translateY(${position})`
    });

    setTimeout(() => {
        inscroll = false;

        $('.nav-sidebar__item').eq(sectionEq).addClass('active-circle')
            .siblings().removeClass('active-circle');
    }, 800) // подождать пока завершится инерция на тачпадах
}

const defineSections = sections => {
    const activeSection = sections.filter('.active');
    return {
        activeSection: activeSection,
        nextSection: activeSection.next(),
        prevSection: activeSection.prev()
    }
};

const scrollToSection = direction => {
    const section = defineSections(sections);

    if (inscroll) return;

    if (direction === 'up' && section.nextSection.length) { //скроллим вниз
        performTransition(section.nextSection.index())
    }

    if (direction === 'down' && section.prevSection.length) { //спроллим вверх
        performTransition(section.prevSection.index())
    }
};

$('.wrapper').on({
    wheel: e => {
        const deltaY = e.originalEvent.deltaY
        const direction = (deltaY > 0) ? 'up' : 'down'

        scrollToSection(direction);
    },
    touchmove: e => (e.preventDefault())
});

// разрешаем свайп на мобильниках
if (isMobile) {
    $(window).swipe({
        swipe: (event, direction) => {
            scrollToSection(direction)
        }
    });
}

$(document).on('keydown', (e) => {
    const section = defineSections(sections);

    switch (e.keyCode) {
        case 40: // up
            if (!section.nextSection.length) return
            performTransition(section.nextSection.index())
            break;

        case 38: // down
            if (!section.prevSection.length) return
            performTransition(section.prevSection.index())
            break;
    }
});

// клики по кнопкам навигации
function initEvent() {
    $('[data-number]').on('click', (e) => {
        e.preventDefault();
        performTransition(parseInt($(e.target).attr('data-number')));
    });
}
initEvent();