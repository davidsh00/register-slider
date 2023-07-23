document.addEventListener("DOMContentLoaded", () => {
  //variables
  const slides = [...document.querySelectorAll("#register .slider-slide")];
  const navLinks = [
    ...document.querySelectorAll("#register nav.header-nav .nav-nav li>a"),
  ];

  const sliderParam = new URLSearchParams(window.location.search).get("id");
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

  setActiveSlide(slides, sliderParam);

  navLinks.forEach((navLink) => {
    navLink.addEventListener("mouseenter", () => {
      cardId = navLink.getAttribute("data-card_id");
      if (window.innerWidth > 720) {
        setActiveSlide(slides, cardId);
      }
    });
    navLink.addEventListener("click", () => {
      cardId = navLink.getAttribute("data-card_id");
      setActiveSlide(cardId);
    });
  });
});
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  startLoading();
});

function startLoading() {
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
        const slides = [
          ...document.querySelectorAll("#register .slider-slide"),
        ];
        register.classList.add("loaded");
        register.querySelector(".intro").remove();
        autoPlay(5000);
      }, 2000);
    }
  }, 30);
}
function autoPlay(timer) {
  setTimeout(() => {
    const slides = [...document.querySelectorAll("#register .slider-slide")];
    const nextSlideId =
      slides[
        (slides.indexOf(
          slides.find((slide) => slide.classList.contains("active"))
        ) +
          1) %
          slides.length
      ].id;
    setActiveSlide(slides, nextSlideId);
    autoPlay(timer);
  }, timer);
}

//set active slide
function setActiveSlide(slides, id) {
  slides.forEach((slide) => {
    if (slide.id != id) {
      slide.classList.remove("active");
    } else {
      if (!slide.classList.contains("active")) {
        slide.classList.add("active");
      }
    }
  });
  if (!slides.filter((item) => item.classList.contains("active")).length) {
    slides[0].classList.add("active");
  }
}
