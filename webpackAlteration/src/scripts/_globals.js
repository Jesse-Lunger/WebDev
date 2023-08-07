import { copyObject } from './_utility';
import * as carFun from './_carousel';

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

export async function DOMContentLoaded(){
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
console.log(headerCopy.id);
headerCopy.querySelector('#btnHamburger').id = 'btnHamburgerCopy';
console.log(headerCopy.id);

headerCopy.classList.add('disable-transition');

// initialized data structures
navLinks.forEach(link => {
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

// Profile Image
import profileImg from '../images/jpgs/Reasons/profile.jpg';

// Carousel Images
import fight from '../images/jpgs/carousel/fight.jpg';
import ARA from '../images/jpgs/carousel/ARA.jpg';
import spectrogram from '../images/jpgs/carousel/spectrogram.jpg';
import artBroker from '../images/jpgs/carousel/artBroker.jpg';
import webDev from '../images/jpgs/carousel/webDev.jpg';

// Reason Images
import ufologo from '../images/jpgs/Reasons/ufoLogo.svg';
import personal from '../images/jpgs/Reasons/personal.jpg';
import experience from '../images/jpgs/Reasons/experience.jpg';


const profileImgHandle = body.querySelector('.heroImg');
const educationImgHandle = document.getElementById('reason1');
const personalImgHandle = document.getElementById('reason2');
const experienceImgHandle = document.getElementById('reason3'); // Correct the typo "reaon3" to "reason3"

educationImgHandle.style.backgroundColor = "white";



profileImgHandle.src = profileImg;
educationImgHandle.style.backgroundImage = `url(${ufologo})`; // Use backgroundImage property with 'url()' syntax
personalImgHandle.style.backgroundImage = `url(${personal})`; // Use backgroundImage property with 'url()' syntax
experienceImgHandle.style.backgroundImage = `url(${experience})`; // Use backgroundImage property with 'url()' syntax

const carouselData = {
  'unity': {
    'image': fight,
    'description': '<pre>Experience: <br> Blender <br> C# <br> Unity',
    'link': 'https://github.com/Jesse-Lunger/Fight/tree/main'
  },
  'APP Development': {
    'image': ARA,
    'description': '<pre>Experience: <br> Python <br> Tkinter <br> SQL',
    'link': 'https://github.com/Jesse-Lunger/ARA/tree/main'
  },
  'ArtBroker': {
    'image': artBroker,
    'description': '<pre>Experience: <br> PHP <br> html <br> SQL',
    'link': 'https://github.com/Jesse-Lunger/DatabaseWork'
  },
  'Sound Recognition': {
    'image': spectrogram,
    'description': '<pre>Experience: <br> Deep Learning <br> Pytorch',
    'link': 'https://github.com/Jesse-Lunger/SoundRecognition/tree/master'
  },
  'Web Development': {
    'image': webDev,
    'description': '<pre>Experience: <br> JavaScript <br> CSS <br> Html <br> WebPack',
    'link': 'https://github.com/Jesse-Lunger/WebDev/tree/main'
  }
}
export async function initializeCarouselItems(){
  for (const key in carouselData) {
    const carItem = document.createElement('div');
    const imageTittle = document.createElement('h3');
    const imageBody = document.createElement('h3');
    const image = document.createElement('img');
    const repoLink = document.createElement('a');
    carItem.classList.add('carouselItem');

    const tittleData = key;
    const data = carouselData[key];
    const imageData = data['image'];
    const descriptionData = data['description'];
    const linkData = data['link'];

    imageTittle.textContent = tittleData;
    imageTittle.classList.add('carouselHeader');

    imageBody.innerHTML = descriptionData;
    imageBody.classList.add('carouselBody');

    image.src = imageData;
    image.classList.add('carouselImg');

    repoLink.href = linkData;
    repoLink.classList.add('carouselLink', 'btn');
    repoLink.innerHTML = 'Repo';

    carItem.appendChild(imageTittle);
    carItem.appendChild(image);
    carItem.appendChild(imageBody); 
    carItem.appendChild(repoLink);
    carousel.appendChild(carItem);
    carItem.style.zIndex = '1';
  }
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


