document.addEventListener("DOMContentLoaded", function () {
  const sliderContent = document.querySelector(".slider-content");
  const slides = sliderContent.querySelectorAll("p");
  const dots = document.querySelectorAll(".dot");
  let currentSlide = 0;
  const slideInterval = 3000; // Change slide every 3 seconds

  function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }

  function updatePagination() {
    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    updatePagination();
  }

  // Initialize the first slide and pagination
  showSlide(currentSlide);
  updatePagination();

  // Start the slide show
  setInterval(nextSlide, slideInterval);

  // Handle dot click events
  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      currentSlide = index;
      showSlide(currentSlide);
      updatePagination();
    });
  });
});
