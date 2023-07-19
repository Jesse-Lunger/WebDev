//Movement functions for objects

function moveObjectToPosition(position, object) {
    return new Promise(resolve => {
      const currentPosition = object.getBoundingClientRect().top;
      const finalPosition = position;
      const duration = 500; // 1 second
      let startTime = null;
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const newPosition = easeOutQuad(timeElapsed, currentPosition, finalPosition - currentPosition, duration);
        object.style.top = newPosition + "px";
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        } else {
          resolve(); // Resolve the promise when animation is complete
        }
      }
      requestAnimationFrame(animation);
    });
  }
  
  // Easing function for smooth animation
  function easeOutQuad(t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
  }

export async function toggleMove(object, originalPositions) {
  const values = originalPositions[object.id];
  const originalPosition = originalPositions[object.id][1];
  values[0] = !values[0];
  if (values[0]) {
    await moveObjectToPosition(0, object);
  } else {
    await moveObjectToPosition(originalPosition, object);
  }
}