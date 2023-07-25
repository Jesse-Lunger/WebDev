import { copyObject } from './_utility';

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

export const carousel = document.getElementById('carousel');
export const prevArrow = document.getElementById('prevArrow');
export const nextArrow = document.getElementById('nextArrow');

export const breakpoints = {};

export async function initializeBreakPoints(){
  await new Promise((resolve) => {
    document.addEventListener("DOMContentLoaded", function() {
      // Your JavaScript code here
      breakpoints.mediumBreakpoint = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--medium-breakpoint-up')) * 16;
      breakpoints.largeBreakpoint = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--large-breakpoint-up')) * 16;
      resolve();
    });
  });
}



export const headerCopy = copyObject(header);
headerCopy.querySelector('#btnHamburger').id = 'btnHamburgerCopy';
headerCopy.classList.add('disable-transition');

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
import srcImage1 from '../images/jpgs/carousel/testImage1.jpg';
import srcImage2 from '../images/jpgs/carousel/testImage2.jpg';
import srcImage3 from '../images/jpgs/carousel/testImage3.jpg';
import srcImage4 from '../images/jpgs/carousel/testImage4.jpg';
import srcImage5 from '../images/jpgs/carousel/testImage5.jpg';

const carImages = [srcImage1, srcImage2, srcImage3, srcImage4, srcImage5];
for (let i = 0; i < carImages.length; i++){
  const carItem = document.createElement('div');
  const imageTittle = document.createElement('h3');
  const ImageHandle = document.createElement('img');

  carItem.classList.add('carouselItem')

  const imageTitleText = `Title ${i + 1}`; // Using template literal to include the value of 'i'
  imageTittle.textContent = imageTitleText;
  imageTittle.classList.add('carouselHeader')

  ImageHandle.src = carImages[i];
  ImageHandle.classList.add('carouselImg');

  carItem.appendChild(imageTittle);
  carItem.appendChild(ImageHandle);
  carousel.appendChild(carItem);
}


// image1.src = srcImage1;
// carousel.appendChild(image1);

// export const testImage1 = document.getElementById('testImage1');
// testImage1.src = srcImage1;



// for (let i = 1; i <= 5; i++) {
//   const imagePath = `../images/jpegs/carousel/testImage${i}.jpg`;
//   import(imagePath);
//   // import(imagePath)
//   //   .then((image) => {
//   //     console.log('Imported image:', image.default);
//   //   })
//   //   .catch((error) => {
//   //     // Handle any errors that occur during the import
//   //     console.error('Error importing image:', error);
//   //   });
// }


