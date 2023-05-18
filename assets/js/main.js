const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slideIndex = 0;
const slideWidth = slider.clientWidth;

prevBtn.addEventListener('click', () => {
  slideIndex--;
  slide();
});

nextBtn.addEventListener('click', () => {
  slideIndex++;
  slide();
});

function slide() {
  if (slideIndex < 0) {
    slideIndex = slider.children.length - 1;
  } else if (slideIndex >= slider.children.length) {
    slideIndex = 0;
  }
  
  slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}
