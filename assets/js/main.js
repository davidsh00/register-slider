document.addEventListener("DOMContentLoaded", () => {
  //variables
  const slides = [...document.querySelectorAll("#register .slider-slide")];

  // navbar toggle Btn
  document.getElementById("toggleNav").addEventListener("click", () => {
    const nav = document.querySelector(".header-nav");
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
    } else {
      nav.classList.add("open");
    }
  });

  // set slide active by mouse click
  slides.forEach((slide) => {
    slide.addEventListener("click", () => {
      slides.forEach((checkSlide) => checkSlide.classList.remove("active"));
      slide.classList.add("active");
    });
  });

  //set slide active by nav link
  function setActiveSlide(id) {
    slides.forEach((slide) => {
      if (slide.id != id) {
        slide.classList.remove("active");
      } else {
        if (!slide.classList.contains("active")) {
          slide.classList.add("active");
        }
      }
    });
  }
  const navLinks = [
    ...document.querySelectorAll("#register nav.header-nav .nav-nav li>a"),
  ];
  navLinks.forEach((navLink) => {
    navLink.addEventListener("mouseenter", () => {
      cardId = navLink.getAttribute("data-card_id");
      if (window.innerWidth > 720) {
        setActiveSlide(cardId);
      }
    });
    navLink.addEventListener("click", () => {
      cardId = navLink.getAttribute("data-card_id");
      setActiveSlide(cardId);
    });
  });

  //Loading
  const loadingCounter = document.querySelector(".intro .intro-loading");
  const s1 = setInterval(() => {
    const counterVal = loadingCounter.innerHTML.replace("%", "");
    loadingCounter.innerHTML = +counterVal + 1 + "%";
    if (+counterVal >= 99) {
      clearInterval(s1);
      const register = document.getElementById("register");
      register.classList.add("intro");
      setTimeout(() => {
        register.classList.add("loaded");
        register.querySelector(".intro").remove();
      }, 2000);
    }
  }, 30);
});
