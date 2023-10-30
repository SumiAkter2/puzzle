// active class:
console.log("please allah help me");
const links = document.querySelectorAll("#nav-link   a");
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
// function handleClick(event) {
//   event.preventDefault();
//   links.forEach((link) => link.classList.remove("active"));
//   event.target.classList.add("active");
// }

// links.forEach((link) => link.addEventListener("click", handleClick));
// links[0].classList.add("active");
// activeClass.style.display = "block";

// slider:
console.log("all ok");
class Slider {
  constructor(element) {
    this.el = document.querySelector(element);
    this.init();
  }

  init() {
    this.links = this.el.querySelectorAll("#slider-nav a");
    this.wrapper = this.el.querySelector("#slider-wrapper");
    this.navigate();
  }

  navigate() {
    for (let i = 0; i < this.links.length; ++i) {
      let link = this.links[i];
      this.slide(link);
    }
  }

  slide(element) {
    element.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        const a = element;
        this.setCurrentLink(a);
        const index = parseInt(a.getAttribute("data-slide"), 10) + 1;
        const currentSlide = this.el.querySelector(
          `.slide:nth-child(${index})`
        );

        this.wrapper.style.left = `-${currentSlide.offsetLeft}px`;
      },
      false
    );
  }

  setCurrentLink(link) {
    const parent = link.parentNode;
    const a = parent.querySelectorAll("a");

    link.className = "current";

    for (let j = 0; j < a.length; ++j) {
      const cur = a[j];
      if (cur !== link) {
        cur.className = "";
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const aSlider = new Slider("#slider");
});
