"use strict";

/*Hero functionalities */
const navigation = document.querySelector("nav");
const navigation_open_button = document.querySelector(".hero-menu_button");
const navigation_close_button = document.querySelector(".button-hidden");
const hero_section = document.querySelector(".hero-main");

navigation_open_button.addEventListener("click", () => {
  navigation.classList.remove("hidden");
  hero_section.classList.add("blur");
});
navigation_close_button.addEventListener("click", () => {
  navigation.classList.add("hidden");
  hero_section.classList.remove("blur");
});

const hero_left = document.querySelector(".hero-main_left");

//programs
const cards = document.querySelectorAll(".programs-card");
const program_btns = document.querySelectorAll(".nav-a");

program_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const program = btn.classList[1].slice(0, 3); //get program name
    //reset background to add a new one based on which color is clicked
    let program_section_background = document.querySelector(".programs");
    program_section_background.classList.forEach((className) => {
      if (className != "programs") {
        program_section_background.classList.remove(`${className}`);
      }
    });
    console.log(program_section_background.classList);
    program_section_background.classList.add(`${program}-backcolor`);
    //remove hide class from pressed program card
    if (document.querySelector(`.${program}-card`).classList.contains("hide")) {
      document.querySelector(`.${program}-card`).classList.remove("hide");

      console.log(program_section_background.classList);
      document
        .querySelector(`.${program}-card`)
        .classList.add("card-animation"); //animate card to show slowly
    }
    cards.forEach((card) => {
      if (
        //select unpressed card
        !card.classList.contains(`${program}-card`) &&
        !card.classList.contains("hide")
      ) {
        let nameofcard = card.classList[1].slice(0, 3);
        document //remove background from unpressed buttons
          .querySelector(`.${nameofcard}-btn`)
          .classList.remove("program-selected");
        document //remove special color of unpressed buttons
          .querySelector(`.${nameofcard}-btn`)
          .classList.remove(`${nameofcard}-color`);
        card.classList.add("hide");
        document //add special color to pressed button
          .querySelector(`.${program}-btn`)
          .classList.add(`${program}-color`);
        document //add background to pressed button
          .querySelector(`.${program}-btn`)
          .classList.add("program-selected");
      }
    });
  });
});

//
