const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close-btn");
const editorImg = document.getElementById("editor-img");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.add("remove-menu");
  menu.classList.add("menu-active");
  closeBtn.classList.add("close-btn-active");
});

closeBtn.addEventListener("click", () => {
  closeBtn.classList.remove("close-btn-active");
  menu.classList.toggle("menu-active");
  menuBtn.classList.remove("remove-menu");
});
