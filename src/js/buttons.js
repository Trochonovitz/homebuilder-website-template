const buttons = [...document.querySelectorAll(".about__button")];
const aboutCaptionPlace = document.querySelector(".about__caption p");

const buttonsCaptions = {
  text: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis, urna nec aliquet vestibulum, neque odio mattis est, sed tempor sapien urna volutpat metus. Nam turpis elit, pharetra ut felis eu, suscipit fringilla lacus. Mauris massa odio, sagittis in venenatis vitae, venenatis ac neque. Sed auctor felis a nibh sagittis ultricies. Maecenas eget augue rutrum, congue magna sit amet, porttitor lorem.",

    "Nunc vel aliquam lectus, nec rhoncus erat. Vestibulum varius gravida nibh eu tempus. Cras eu quam rhoncus, tempor mi sed, rutrum ligula. Duis sollicitudin ac odio et vulputate. Praesent ullamcorper purus urna. Donec bibendum eleifend sapien eu consequat. Aenean rhoncus, mauris vel finibus tempus, dolor neque suscipit eros, et gravida nulla odio vel leo.",

    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
  ]
};

const activeButton = event => {
  buttons.forEach((button, index) => {
    button.setAttribute("index", index);
    button.classList.remove("about__button--active");
  });

  event.target.classList.add("about__button--active");

  let index = event.target.getAttribute("index");

  aboutCaptionPlace.textContent = buttonsCaptions.text[index];
};

buttons.forEach(button => button.addEventListener("click", activeButton));
