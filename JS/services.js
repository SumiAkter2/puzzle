// location set:

document.getElementById("home-page").addEventListener("click", function () {
  window.location.href = "/index.html";
});
document.getElementById("about-page").addEventListener("click", function () {
  window.location.href = "/about.html";
});
document.getElementById("services-page").addEventListener("click", function () {
  window.location.href = "/services.html";
});
console.log("please allah help me");

// active class:

const links = document.querySelectorAll("#nav-link li  a");
const contentSections = document.querySelectorAll(".active-svg");

function showContent(link) {
  links.forEach((link) => link.classList.remove("active"));

  contentSections.forEach((section) => section.classList.remove("active"));

  link.classList.add("active");

  // const targetId = link.getAttribute("href").substring(1);
  const targetId = link
    .getAttribute("href")
    .split("/")
    .pop()
    .replace(".html", "");
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.classList.add("active");
    console.log(targetId);
  } else {
    console.error(`Element with ID ${targetId} not found.`);
  }
}

// Add click event listeners to each link
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showContent(link);
  });
});

showContent(links[2]);

// slider:
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;
  // const slideInterval = 1000; // Change slide every 5 seconds

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
  // setInterval(nextSlide, slideInterval);

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
