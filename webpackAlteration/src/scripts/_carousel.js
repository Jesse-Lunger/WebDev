import * as globals from './_globals';

let currentIndex = 0;
let visibleImages = 3;

export function initializeCarArrows(){
    globals.prevArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            console.log('carousel left');
            scrollToHorizontal(currentIndex, globals.carousel);
        }
    });
    globals.nextArrow.addEventListener('click', () => {
        if (currentIndex < carousel.childElementCount - visibleImages) {
            currentIndex++;
            console.log('carousel right');
            scrollToHorizontal(currentIndex, globals.carousel);
        }
    });
}

export function carouselResize(windowSize) {
    currentIndex = 0;
    scrollToHorizontal(currentIndex, globals.carousel);
    if (windowSize === 'small'){
        visibleImages = 1;
    }
    if (windowSize === 'medium'){
        visibleImages = 3;
    }
    if (windowSize == 'large'){
        visibleImages = 5;
    }
}


function scrollToHorizontal(index, obj) {
    const objItemWidth = obj.children[0].offsetWidth;
    const scrollPosition = objItemWidth * index;
    obj.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
    });
}