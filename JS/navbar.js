// active class:
console.log("please allah help me");
const links = document.querySelectorAll("#nav-link li  a");
const contentSections = document.querySelectorAll(".active-svg");
function showContent(link) {
  links.forEach((link) => link.classList.remove("active"));

  contentSections.forEach((section) => section.classList.remove("active"));

  link.classList.add("active");

  const targetId = link.getAttribute("href").substring(1);

  document.getElementById(targetId).classList.add("active");
}

// Add click event listeners to each link
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showContent(link);
  });
});
showContent(links[0]);

// slider:

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;
  const slideInterval = 5000; // Change slide every 5 seconds

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

console.log("all ok");
// class Slider {
//   constructor(element) {
//     this.el = document.querySelector(element);
//     this.init();
//   }

//   init() {
//     this.links = this.el.querySelectorAll("#slider-nav a");
//     this.wrapper = this.el.querySelector("#slider-wrapper");
//     this.navigate();
//   }

//   navigate() {
//     for (let i = 0; i < this.links.length; ++i) {
//       let link = this.links[i];
//       this.slide(link);
//     }
//   }

//   slide(element) {
//     element.addEventListener(
//       "click",
//       (e) => {
//         e.preventDefault();
//         const a = element;
//         this.setCurrentLink(a);
//         const index = parseInt(a.getAttribute("data-slide"), 10) + 1;
//         const currentSlide = this.el.querySelector(
//           `.slide:nth-child(${index})`
//         );

//         this.wrapper.style.left = `-${currentSlide.offsetLeft}px`;
//       },
//       false
//     );
//   }

//   setCurrentLink(link) {
//     const parent = link.parentNode;
//     const a = parent.querySelectorAll("a");

//     link.className = "current";

//     for (let j = 0; j < a.length; ++j) {
//       const cur = a[j];
//       if (cur !== link) {
//         cur.className = "";
//       }
//     }
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const aSlider = new Slider("#slider");
// });
