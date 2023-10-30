document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;
  const slideInterval = 3000; // Change slide every 3 seconds

  function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  }

  function updatePagination() {
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    slides[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    updatePagination();
  }

  // Initialize the first slide and pagination
  slides[currentIndex].style.display = "block";
  updatePagination();

  // Start the slide show
  setInterval(nextSlide, slideInterval);

  // Handle dot click events
  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      slides[currentIndex].style.display = "none";
      currentIndex = index;
      showSlide(currentIndex);
      updatePagination();
    });
  });
});
