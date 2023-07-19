export function copyObject(object) {
    const objectCopy = object.cloneNode(true);
    objectCopy.style.position = 'fixed';
    objectCopy.style.top = object.getBoundingClientRect().top + 'px';
    objectCopy.style.zIndex = '9999';
    document.body.appendChild(objectCopy);
    objectCopy.style.display = 'block';
    objectCopy.style.visibility = 'hidden';
    return objectCopy;
  }


// function stick(stickyHeader, stickyOffset) {
//     // will need these as globals 
//     // var stickyHeader = document.getElementById("stickyHeader");
//     // var sticky = stickyHeader.offsetTop;
//     // window.onscroll = function() {
//     //     stick();
//     // };
//     if (window.scrollY > stickyOffset) {
//         stickyHeader.classList.add("sticky");
//     } else {
//         stickyHeader.classList.remove("sticky");
//     }
// }
  
