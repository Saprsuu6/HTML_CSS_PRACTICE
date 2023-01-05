import Swiper from "./swiper.js";

document.addEventListener("DOMContentLoaded", (event) => {
  ResizeEvent();
  window.addEventListener("resize", ResizeEvent);

  // sensor logic
  var swiper = new Swiper();
  SensorLogic(swiper);
});

function ResizeEvent() {
  var back_div = document.querySelector(".back");
  var style = window.getComputedStyle(back_div, null);
  back_div.style.height = style.width;
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
