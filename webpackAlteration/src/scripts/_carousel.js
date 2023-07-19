const carousel = document.getElementById('carousel');
const prevArrow = document.getElementById('prevArrow');
const nextArrow = document.getElementById('nextArrow');
let currentIndex = 0;

prevArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    scrollToImage(currentIndex);
  }
});

nextArrow.addEventListener('click', () => {
  if (currentIndex < carousel.childElementCount - 1) {
    currentIndex++;
    scrollToImage(currentIndex);
  }
});

function scrollToImage(index) {
  const carouselItemWidth = carousel.children[0].offsetWidth;
  const scrollPosition = carouselItemWidth * index;
  carousel.scrollTo({
    left: scrollPosition,
    behavior: 'smooth',
  });
}
