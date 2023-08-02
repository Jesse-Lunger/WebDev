import { SassColor } from 'sass';
import * as globals from './_globals';

let currentIndex = 0;
let visibleImages = 3;

export function arrowHighlights(){
    if (currentIndex == 0){
        globals.prevArrow.classList.add('arrowNotContains');
        globals.prevArrow.classList.remove('arrowContains');
    }
    else {
        globals.prevArrow.classList.add('arrowContains');
        globals.prevArrow.classList.remove('arrowNotContains');
    }
    if (currentIndex == globals.carousel.childElementCount - visibleImages) {
        globals.nextArrow.classList.add('arrowNotContains');
        globals.nextArrow.classList.remove('arrowContains');
    }
    else {
        globals.nextArrow.classList.add('arrowContains');
        globals.nextArrow.classList.remove('arrowNotContains');
    }
}

export async function initializeCarArrows(){
    arrowHighlights();
    globals.prevArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            console.log('carousel left');
            scrollToHorizontal(currentIndex, globals.carousel);
        }
        arrowHighlights();
    });
    globals.nextArrow.addEventListener('click', () => {
        if (currentIndex < globals.carousel.childElementCount - visibleImages) {
            currentIndex++;
            console.log('carousel right');
            scrollToHorizontal(currentIndex, globals.carousel);
        }
        arrowHighlights();
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

export function carouselHeaderBodyWidth(){
    const carouselItems = document.querySelectorAll('.carouselItem');

    carouselItems.forEach(item => {
      const carHeader = item.querySelector('.carouselHeader');
      const carBody = item.querySelector('.carouselBody');
      const image = getComputedStyle(item.querySelector('img'));
      carHeader.style.width = carBody.style.width = image.width;
    })
  }

export function carouselArrowHeight(){
    const carouselArrows = document.querySelectorAll('.carouselArrows');
    const carouselItems = document.querySelector('.carouselItem');
    carouselArrows.forEach(arrow => {
        const image = getComputedStyle(carouselItems.querySelector('img'));
        arrow.style.height = image.height;
    })

}