const burger = document.querySelector(".burger");
const nav = document.querySelector("header");
const menu = document.querySelector(".links");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  header.classList.remove("active");
}