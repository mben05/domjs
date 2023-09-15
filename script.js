let btnMenu = document.querySelector(".icon-menu");
let btnClose = document.querySelector(".exit-icon");
let menu = document.querySelector(".box");

btnMenu.addEventListener("click", () => {
  menu.classList.add("translate");
});

btnClose.addEventListener("click", () => {
  menu.classList.remove("translate");
});
