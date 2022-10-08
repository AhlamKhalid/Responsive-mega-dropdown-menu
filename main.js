// elements
const menuButton = document.getElementById("menu-button");
const closeButton = document.getElementById("close-button");
const navigationMenu = document.getElementById("navigation-menu");
const dropdownTrigger = document.getElementById("dropdown-trigger");
const dropdownContainer = document.getElementById("dropdown-container");
const dropdownArrow = document.getElementById("dropdown-arrow");
const megaDropdownTrigger = document.getElementById("mega-dropdown-trigger");
const megaDropdownArrow = document.getElementById("mega-dropdown-arrow");

// event listeners
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

dropdownTrigger.addEventListener("click", () => {
  dropdownContainer.classList.toggle("show");
  dropdownArrow.classList.toggle("flipped");
});

megaDropdownTrigger.addEventListener("click", () => {
  navigationMenu.classList.toggle("show");
  megaDropdownArrow.classList.toggle("flipped");
});
