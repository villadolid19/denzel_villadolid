export * from "./Profile";
export * from "./About";
export * from "./Experience";
export * from "./Contact";

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}