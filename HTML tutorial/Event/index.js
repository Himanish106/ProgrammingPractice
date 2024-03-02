var menuBtn = document.querySelector("#menu-bar");
var navBar = document.querySelector(".navbar");
menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navBar.classList.toggle("active");
};
window.onscroll = () => {
    menuBtn.classList.remove("fa-times");
    navBar.classList.remove("active");
  };