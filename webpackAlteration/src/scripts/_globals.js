//Initial Empty data Structures
export const headerPositions = {};
export const originalPositions = {};

//Items selected from document
export const btnHamburger = document.querySelector('#btnHamburger');
export const body = document.querySelector('body');
export const header = document.querySelector('.header');
export const overlay = document.querySelector('.overlay');
export const fadeElems = document.querySelectorAll('.has-fade');
export const content = document.querySelector('.content');
export const topCont = document.getElementById('headerTop');
export const originalHeaderTop = header.getBoundingClientRect().top;
export const navLinks = document.querySelectorAll('.tabs a');

// initialized data structures
navLinks.forEach(link => {
    console.log(link.getAttribute('href'));
    const targetSection = document.querySelector('#' + link.getAttribute('href'));
    headerPositions[targetSection.offsetTop + targetSection.offsetHeight] =targetSection.id;
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = '#' + this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
export const headerPositionList = Object.keys(headerPositions);
headerPositionList.sort((a, b) => a - b);
export const headerTabs = document.getElementById("headerTabs");

// Images
import srcTestimage1 from '../images/jpegs/carousel/testImage1.jpg';
export const testImage1 = document.getElementById('testImage1');
testImage1.src = srcTestimage1;



const carousel = document.getElementById('carousel');
for (let i = 1; i <= 5; i++) {
  import(`../images/jpegs/carousel/testImage${i}.jpg`)
    .then((image) => {
      // Handle the imported image here
      console.log('Imported image:', image.default);
      // const tmpImg = document.createElement('img');
      // tmpImg.src = image.default;
      // carousel.appendChild(tmpImg);
    })
    .catch((error) => {
      // Handle any errors that occur during the import
      console.error('Error importing image:', error);
    });
}

