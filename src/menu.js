// (() => {
//   const menuBtnRef = document.querySelector("[data-menu-button]");
//   const mobileMenuRef = document.querySelector("[data-menu]");
//   const mobileBtnClose = document.querySelector("[data-menu-close]");

//   menuBtnRef.addEventListener("click", () => {
//     mobileMenuRef.classList.toggle("is-open");
//   });

//   mobileBtnClose.addEventListener("click", () => {
//     mobileMenuRef.classList.toggle("is-open");
//   });
// })();
(() => {
  const menuBtnRef = document.querySelectorAll("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileBtnClose = document.querySelectorAll("[data-menu-close]");
  menuBtnRef.forEach(e => {
    e.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-open");
    });
  });
  mobileBtnClose.forEach(e => {
    e.addEventListener("click", () => {
      mobileMenuRef.classList.toggle("is-open");
    });
  });
})(); 