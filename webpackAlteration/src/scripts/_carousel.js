
export function initializeCarArrows(prevArrow, nextArrow, currentIndex, visibleImages, carousel){
    prevArrow.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        console.log('carousel left');
    
        scrollToImage(currentIndex, carousel);
      }
    });
    nextArrow.addEventListener('click', () => {
      if (currentIndex < carousel.childElementCount - visibleImages) {
        currentIndex++;
        console.log(currentIndex);
        console.log('carousel right');
        scrollToImage(currentIndex, carousel);
      }
    });
  }


  function scrollToImage(index, carousel) {
    const carouselItemWidth = carousel.children[0].offsetWidth;
    const scrollPosition = carouselItemWidth * index;
    carousel.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    });
  }