const hamburber = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");

const hamburgerActive = () => {
  hamburber.classList.toggle("hamburger--active");
  nav.classList.toggle("navigation--active");
};

hamburber.addEventListener("click", hamburgerActive);
