const menu = document.querySelector(".nav-hamburguer");
const menuButton = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("open");
});
