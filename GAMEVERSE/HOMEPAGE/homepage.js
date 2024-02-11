const button = document.querySelector('.animated-button');
button.addEventListener('click', function() {
  // Perform action on button click
  console.log('Button clicked!');
});

let sliderContainer = document.querySelector('.slider-container2');
let slider = sliderContainer.querySelector('.slider2');

sliderContainer.addEventListener('mouseenter', function() {
  slider.style.animationPlayState = 'paused';
});

sliderContainer.addEventListener('mouseleave', function() {
  slider.style.animationPlayState = 'running';
});
