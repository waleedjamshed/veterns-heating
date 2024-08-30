function slider1() {
  let splides = $('.slider1');
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(splides[i], {
      // Desktop on down
      perPage: 3,
      perMove: 1,
      focus: 0, // 0 = left and 'center' = center
      type: 'loop', // 'loop' or 'slide'
      gap: '2rem', // space between slides
      arrows: 'slider', // 'slider' or false
      pagination: false, // 'slider' or false
      speed: 600, // transition speed in milliseconds
      dragAngleThreshold: 30, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind: false, // go back to beginning when reach end
      waitForTransition: false,
      updateOnMove: true,
      breakpoints: {
        991: {
          perPage: 2,
        },
        767: {
          perPage: 1,
        },
        479: {
          perPage: 1,
        }
      }
    }).mount();
  }
}
$(document).ready(function() {
  slider1();
});

