// const mainSlider = document.querySelector(".swiper1");
// const myMainSwiper = new Swiper(mainSlider, {
//   pagination: {
//     el: ".swiper-pagination"
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev"
//   },
//   autoplay: {
//     delay: 3000
//   }
// });

const slides = [...document.querySelectorAll(".swiper .swiper-slide")];
const sliderProps = {
  img: ["/img/bg_0.jpg", "/img/bg_1.jpg", "/img/bg_2.jpg"],
  text: [
    "WE'RE HERE TO HELP YOU",
    "BEST BUILDER IN THE WORLD",
    "WE BUILD YOUR HOME"
  ],
  title: ["HOME BUILDER", "WE BUILD HOME", "PROFESSIONAL BUILDER"]
};

const newSlide = () => {
  slides.forEach((slide, i) => {
    const text = document.createElement("p");
    const title = document.createElement("h1");

    text.classList.add("swiper-slide__text");
    title.classList.add("swiper-slide__title");

    text.textContent = sliderProps.text[i];
    title.textContent = sliderProps.title[i];

    slide.appendChild(text);
    slide.appendChild(title);

    slide.style.backgroundImage = `url(${sliderProps.img[i]})`;
  });
};

newSlide();

const secondSlider = document.querySelector(".swiper2");
const mySecondSwiper = new Swiper(secondSlider, {
  pagination: {
    el: ".swiper-pagination"
  },
  slidesPerView: 3,
  spaceBetween: 10
});
