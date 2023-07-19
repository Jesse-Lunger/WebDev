import {closeHeader, openHeader, openHeaderCopy, closeHeaderCopy} from './_headerFunctions';
import { copyObject } from './_utility';
// import generateJoke from "./generateJoke";
import '../styles/style.css';

import * as globals from './_globals';





const headerCopy = copyObject(globals.header);
headerCopy.querySelector('#btnHamburger').id = 'btnHamburgerCopy';
headerCopy.classList.add('disable-transition');

globals.header.addEventListener('click', async function(event){
  event.preventDefault();
  globals.body.classList.add('noscroll');
  console.log('header clicked');
  await closeHeader(globals.header);
  await openHeaderCopy(headerCopy, globals.originalPositions, globals.header);
});

headerCopy.addEventListener('click', async function(event) {
  event.preventDefault();
  console.log('Hamburger menu clicked');
  await closeHeaderCopy(headerCopy,  globals.originalPositions);
  await openHeader(globals.header);
  globals.body.classList.remove('noscroll');
});

window.addEventListener('resize', async function() {
  if (window.innerWidth >= 1000) {  
    headerCopy.classList.add('disable-transition');
    const fadeElemsCopy = headerCopy.querySelectorAll('.has-fade');
    fadeElemsCopy.forEach(function(element) {
      element.classList.add('fade-out');
      element.classList.remove('fade-in');
    });
    headerCopy.style.visibility = 'hidden';
    headerCopy.style.visibility = 'hidden';

    // headerCopy.querySelector('#btnHamburger').style.display = 'none';
    headerCopy.classList.remove('open');
    globals.originalPositions[headerCopy.id][0] = false;
    openHeader(globals.header);
    globals.body.classList.remove('noscroll');
  }
});


var position = 0;
function showTabs() {
  var nextHeaderBottom = globals.headerPositionList[position];
  if (window.scrollY > nextHeaderBottom) {
    globals.headerTabs.classList.add('fade-in');
    globals.headerTabs.classList.remove('fade-out');
    globals.navLinks[position].classList.add('fade-in');
    globals.navLinks[position].classList.remove('fade-out');
    if (position + 1 < globals.navLinks.length && window.scrollY > globals.headerPositionList[position + 1]){
      position += 1;
    }
  }
  else if (0 < position){
    globals.navLinks[position].classList.remove('fade-in');
    globals.navLinks[position].classList.add('fade-out');
    position -= 1;
  }
  else {
    globals.headerTabs.classList.remove('fade-in');
    globals.headerTabs.classList.add('fade-out');
    globals.navLinks[position].classList.remove('fade-in');
    globals.navLinks[position].classList.add('fade-out');
  }
}

window.onscroll = function() {
    showTabs();
};


