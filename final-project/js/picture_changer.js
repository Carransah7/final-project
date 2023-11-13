//Toggles between pictures
let slides = document.getElementsByClassName('slide');
let currentSlide = 0;

function changeSlide(direction) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide+slides.length+direction) % slides.length;
  slides[currentSlide].classList.add('active');
}