import Swiper from "swiper";

const slider = document.querySelector(".swiper-container");

const mySwiper = new Swiper(slider, {
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  slidesPerView: 2,
  spaceBetween: 30
});

// mySwiper.navigation.nextEl.addEventListener("click", console.log("costam"));

// const sliderTitle = document.querySelector(".text h1");
// const sliderParagraph = document.querySelector(".text p");
// const dots = [...document.querySelectorAll(".dot")];

// let index = 0;
// let time = 4000;

// const sliderProps = {
//   img: ["/img/bg_0.jpg", "/img/bg_1.jpg", "/img/bg_2.jpg"],
//   text: [
//     "WE'RE HERE TO HELP YOU",
//     "BEST BUILDER IN THE WORLD",
//     "WE BUILD YOUR HOME"
//   ],
//   title: ["HOME BUILDER", "WE BUILD HOME", "PROFESSIONAL BUILDER"]
// };

// const changeSlide = index => {
//   slider.style.backgroundImage = `url(${sliderProps.img[index]})`;
//   sliderTitle.textContent = sliderProps.title[index];
//   sliderParagraph.textContent = sliderProps.text[index];
// };

// const addActiveDot = index => {
//   dots.forEach(dot => dot.classList.remove("dot--active"));

//   for (let i = 0; i < dots.length; i++) {
//     dots[index].classList.add("dot--active");
//   }
// };

// setInterval(() => {
//   index >= 2 ? (index = 0) : index++;

//   changeSlide(index);
//   addActiveDot(index);
// }, time);
