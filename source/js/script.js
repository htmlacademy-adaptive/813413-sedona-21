const buttonMenu = document.querySelector(".main-nav__toggle");
const buttonCloseMenu = document.querySelector(".main-nav__close-button");
const menuNavigation = document.querySelector(".main-nav__list");

buttonMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuNavigation.classList.add("main-nav__visual");
  menuNavigation.classList.remove("main-nav__hide");
  buttonCloseMenu.classList.add("main-nav__visual");
  buttonCloseMenu.classList.remove("main-nav__hide");
  buttonMenu.classList.add("main-nav__hide");
});

buttonCloseMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuNavigation.classList.remove("main-nav__visual");
  menuNavigation.classList.add("main-nav__hide");
  buttonCloseMenu.classList.remove("main-nav__visual");
  buttonCloseMenu.classList.add("main-nav__hide");
  buttonMenu.classList.remove("main-nav__hide");
})
