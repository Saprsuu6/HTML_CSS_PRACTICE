import Swiper from "./swiper.js";

document.addEventListener("DOMContentLoaded", (event) => {
  ResizeEvent();
  window.addEventListener("resize", ResizeEvent);

  // sensor logic
  var swiper = new Swiper();
  SensorLogic(swiper);

  // screen logic
  var menu_button = document.querySelector(".menu-button");
  var screen = document.getElementById("screen");
  var content = document.querySelector(".screen-content");
  var for_button = document.querySelector(".for-button");

  menu_button.addEventListener("click", (event) => {
    if (screen.classList.contains("close-info")) {
      screen.classList.replace("close-info", "open-info");
      for_button.style.width = "7%";
      content.style.display = "block";

      if (screen.classList.contains("screen-menu-move-right")) {
        screen.classList.replace(
          "screen-menu-move-right",
          "screen-menu-move-left"
        );
      } else {
        screen.classList.add("screen-menu-move-left");
      }
    } else if (screen.classList.contains("open-info")) {
      screen.classList.replace("open-info", "close-info");
      for_button.style.width = "100%";
      content.style.display = "none";

      if (screen.classList.contains("screen-menu-move-left")) {
        screen.classList.replace(
          "screen-menu-move-left",
          "screen-menu-move-right"
        );
      }
    }
  });
});

function ResizeEvent() {
  var back_div = document.querySelector(".back");
  var menu_button_div = document.querySelector(".menu-button");

  if (back_div != null) {
    var style = window.getComputedStyle(back_div, null);
    back_div.style.height = style.width;
  }

  if (menu_button_div != null) {
    var style = window.getComputedStyle(menu_button_div, null);
    menu_button_div.style.height = style.width;
  }
}

function SensorLogic(swiper) {
  var slider = document.querySelector(".slider");
  var slide_block = document.querySelector(".senser-info");

  if (slider != null && slide_block != null) {
    slider.addEventListener("touchstart", (event) => {
      swiper.handleTochStart(event.touches[0]);
    });
    slider.addEventListener("touchmove", (event) => {
      swiper.handleTochMove(event.touches[0], slide_block);
      swiper.ResetCoords();
    });
  }
}
