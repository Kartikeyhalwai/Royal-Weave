document.querySelectorAll(".carousel").forEach((carousel) => {
  const track = carousel.querySelector(".carousel-track");
  const slides = Array.from(track.children);
  const nextBtn = carousel.querySelector(".next");
  const prevBtn = carousel.querySelector(".prev");
let index = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width + 30;
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  if (index < slides.length - 1) {
    index++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});
});