import * as hdrFuncs from './_headerFunctions';
// import generateJoke from "./generateJoke";
import '../styles/style.css';
import * as globals from './_globals';
import * as carFun from './_carousel';



hdrFuncs.initializeHeaderHamburgerBtn()
await globals.initializeBreakPoints();


// var bodyFontSize = parseFloat(getComputedStyle(document.body).fontSize);
// console.log(globals.breakpoints.mediumBreakpoint * bodyFontSize); // Output: Computed font size of the body element




window.addEventListener('resize', async function() {

  if (window.innerWidth >= globals.breakpoints['largeBreakpoint']) {  
    // globals.body.classList.remove('noscroll');
    if (globals.headerCopy.classList.contains('open')){
      this.document.body.classList.remove('noscroll');   
      await hdrFuncs.closeHeaderCopy(globals.headerCopy, globals.originalPositions);
      await hdrFuncs.openHeader(globals.header);
      console.log(globals.btnHamburger.classList);
    }
    if (globals.btnHamburger.style.display === 'block'){
      globals.btnHamburger.style.display = 'none';
    }
    carFun.carouselResize('large');
  }
  else if (window.innerWidth >= globals.breakpoints['mediumBreakpoint']){
    if (globals.btnHamburger.style.display === 'none'){
      globals.btnHamburger.style.display = 'block';
    }
    carFun.carouselResize('medium');
  }
  else {
    carFun.carouselResize('small');
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



carFun.initializeCarArrows();

// globals.mediumBreakpoint
// console.log(mediumBreakpoint); // "40em"
// console.log(largeBreakpoint); // "64em"
// console.log(xlargeBreakpoint); // "87.5em"


// const isMediumBreakPoint = window.matchMedia(`(min-width: ${$breakpoint-up["medium"]})`).matches;
// const isLargeBreakPoint = window.matchMedia(`(min-width: ${$breakpoint-up["large"]})`).matches;

// if (isMediumBreakPoint) {
//   currentIndex = 0;
//   visibleImages = 3; // Set the variable value to 1 for the medium breakpoint
// }

// if (isMediumBreakPoint && isLargeBreakPoint) {
//   currentIndex = 0;
//   visibleImages = 5; // Set the variable value to 1 for the medium breakpoint
// }


