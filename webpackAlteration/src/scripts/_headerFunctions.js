import { toggleMove} from './_moveObject';


export async function closeHeader(object) {
    object.classList.add('disable-transition');
    object.querySelector('#btnHamburger').style.display = 'none';
    object.style.visibility = 'hidden';  
}
  
export async function openHeader(object) {
    object.classList.remove('disable-transition');
    object.style.visibility = 'visible';
    object.querySelector('#btnHamburger').style.display = 'block';
}
  
export async function openHeaderCopy(objectCopy, originalPositions, originalObject){
    objectCopy.querySelector('#btnHamburgerCopy').style.display = 'block';
    objectCopy.style.visibility = 'visible';
    objectCopy.classList.add('openCopy');
    const originalHeaderTop = originalObject.getBoundingClientRect().top;
    if (!(objectCopy.id in originalPositions)) {
        originalPositions[objectCopy.id] = [false, originalHeaderTop];
    }
    originalPositions[objectCopy.id][1] = originalHeaderTop;
    objectCopy.style.top = originalHeaderTop + 'px';
    await toggleMove(objectCopy, originalPositions);
    objectCopy.classList.add('open');
    const fadeElemsCopy = objectCopy.querySelectorAll('.has-fade');
    fadeElemsCopy.forEach(function(element) {
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
    });
    objectCopy.classList.remove('disable-transition');
}
  
export async function closeHeaderCopy(objectCopy, originalPositions) {
    objectCopy.classList.add('disable-transition');
    objectCopy.classList.remove('openCopy');
    const fadeElemsCopy = objectCopy.querySelectorAll('.has-fade');
    fadeElemsCopy.forEach(function(element) {
        element.classList.add('fade-out');
        element.classList.remove('fade-in');
    });
    objectCopy.classList.remove('open');
    await toggleMove(objectCopy, originalPositions);
    // Added slight delay to prevent flickering when headerCopy 
    // became visible when transition was active.
    setTimeout(function() {
        objectCopy.querySelector('#btnHamburgerCopy').style.display = 'none';
        objectCopy.style.visibility = 'hidden';
    }, 200);
}