var header = document.getElementById("nav-link");
var btns = header.getElementsByClassName("link-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

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
