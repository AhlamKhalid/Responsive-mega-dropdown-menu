// elements
const menuButton = document.getElementById("menu-button");
const closeButton = document.getElementById("close-button");
const navigationMenu = document.getElementById("navigation-menu");

menuButton.addEventListener("click", () => {
  menuButton.classList.add("hide");
  closeButton.classList.add("show");
  navigationMenu.classList.add("show");
});

closeButton.addEventListener("click", () => {
  menuButton.classList.remove("hide");
  closeButton.classList.remove("show");
  navigationMenu.classList.remove("show");
});
