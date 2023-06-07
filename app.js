/* Created by Tivotal */

let wrapper = document.querySelector(".wrapper");
let shareMenu = document.querySelector(".share-menu");

//on mouse right button click
window.addEventListener("contextmenu", (e) => {
  //preventing default context menu
  e.preventDefault();

  //getting x and y co ordinates of mouse pointer
  let x = e.offsetX;
  let y = e.offsetY;

  //getting share menu width
  let shareWidth = shareMenu.offsetWidth;

  //getting width of window
  let windowWidth = window.innerWidth;
  //getting wrapper width
  let wrapperWIdth = wrapper.offsetWidth;

  //if x is greater than window width - wrapper width - share menu width
  //then showing share menu on left side else on right side
  if (x > windowWidth - wrapperWIdth - shareWidth) {
    shareMenu.style.left = "-200px";
  } else {
    shareMenu.style.left = "";
    shareMenu.style.right = "-200px";
  }

  // if x value is greater than window width - wrapper width
  //then passing window width - wrapper width - 5 as x value else passing x

  x = x > windowWidth - wrapperWIdth ? windowWidth - wrapperWIdth - 5 : x;

  //getting window height
  let windowHeight = window.innerHeight;

  //getting wrapper height
  let wrapperHeight = wrapper.offsetHeight;

  //if y value is greater than window height - wrapper height
  //then moving share menu towards top else placing at default position
  if (y > windowHeight - wrapperHeight) {
    shareMenu.style.top = "-150px";
  } else {
    shareMenu.style.top = "-35px";
  }

  // if y value is greater than window height - wrapper height
  //then passing window height - wrapper height - 5 as y value else passing y
  y = y > windowHeight - wrapperHeight ? windowHeight - wrapperHeight - 5 : y;

  //showing context menu at mouse pointer
  wrapper.style.left = `${x}px`;
  wrapper.style.top = `${y}px`;

  //showing context menu
  wrapper.style.visibility = "visible";
});

//hiding context menu on left button click
document.addEventListener("click", () => {
  wrapper.style.visibility = "hidden";
});
