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
