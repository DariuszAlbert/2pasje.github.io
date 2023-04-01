const headerImgHolder = document.querySelector(".header__img-holder");

const headerImgScale = (function () {
  setTimeout(function () {
    headerImgHolder.classList.add("scale");
  }, 1800);
})();

const date = new Date();
const year = date.getFullYear();
