// BODY CLICK
const bodyClick = document.querySelector("body");
bodyClick.addEventListener("click", function (e) {
  if (e.target.className !== "navigation__link") {
    console.log(e);
    removeClass(items1);
    removeClass(items2);
    removeClass(items3);
  }
});

// HeADER BACKGROUND ANIMATION

const headerImgHolder = document.querySelector(".header__img-holder");

const headerImgScale = (function () {
  setTimeout(function () {
    headerImgHolder.classList.add("scale");
  }, 1800);
})();

// MAIN NAVIGATION FUNCTIONALITY

const navSteeringItem1 = document.querySelector(
  ".navigation__list--1 .navigation__item--1"
);

const items1 = document.querySelectorAll(".navigation__list--1 > li ");

const navSteeringItem2 = document.querySelector(
  ".navigation__list--2 .navigation__item--1"
);
const items2 = document.querySelectorAll(".navigation__list--2 > li ");

const navSteeringItem3 = document.querySelector(
  ".navigation__list--3 .navigation__item--1"
);

const items3 = document.querySelectorAll(".navigation__list--3 > li ");

const navCheckbox = document.querySelector(".navigation__button");

function removeClass(itemsList) {
  for (let item of itemsList) {
    item.classList.remove("item-visible");
  }
}

navSteeringItem1.addEventListener("click", function () {
  for (let i = 1; i < items1.length; i++) {
    items1[i].classList.toggle("item-visible");
  }
  removeClass(items2);
  removeClass(items3);
});

navSteeringItem2.addEventListener("click", function () {
  for (let i = 1; i < items2.length; i++) {
    items2[i].classList.toggle("item-visible");
  }
  removeClass(items1);
  removeClass(items3);
});

navSteeringItem3.addEventListener("click", function () {
  for (let i = 1; i < items3.length; i++) {
    items3[i].classList.toggle("item-visible");
  }
  removeClass(items1);
  removeClass(items2);
});

navCheckbox.addEventListener("click", function () {
  removeClass(items1);
  removeClass(items2);
  removeClass(items3);
});
