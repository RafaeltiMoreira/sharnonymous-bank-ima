var menu = document.querySelector(".menu");
var navMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("ativo");
  navMenu.classList.toggle("ativo");
});

/* MODAL */

const Modal = {
  open() {
    document.querySelector(".modal-init").classList.add("active");
  },
  close() {
    document.querySelector(".modal-init").classList.remove("active");
  },
};
