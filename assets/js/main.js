document.addEventListener("DOMContentLoaded", () => {
  // navbar toggle Btn
  document.getElementById("toggleNav").addEventListener("click", () => {
    const nav = document.querySelector(".header-nav");
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
    } else {
      nav.classList.add("open");
    }
  });

  const slides = [...document.querySelectorAll(".slider-slide")];
  slides.forEach((slide) => {
    slide.addEventListener("click", () => {
      slides.forEach((checkSlide) => checkSlide.classList.remove("active"));
      slide.classList.add("active");
    });
  });
});
