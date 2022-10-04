// elements
const menuButton = document.getElementById("menu-button");
const closeButton = document.getElementById("close-button");

menuButton.addEventListener("click", () => {
  menuButton.classList.add("hide");
  closeButton.classList.add("show");
});

closeButton.addEventListener("click", () => {
  menuButton.classList.remove("hide");
  closeButton.classList.remove("show");
});
