import Swiper from "./swiper.js";
import movieInfo from "../movieInfo.json" assert { type: "json" };

document.addEventListener("DOMContentLoaded", (event) => {
  ResizeEvent();
  window.addEventListener("resize", ResizeEvent);

  // sensor logic
  var swiper = new Swiper();
  SensorLogic(swiper);
  FillInfo();

  // screen logic
  ScreenLogic();
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
    // menu_button_div.style.height = style.width; in case width in %
  }
}

function SensorLogic(swiper) {
  var slider = document.querySelector(".slider");
  var slide_block = document.querySelector(".senser-info");
  var content_overflow = document.querySelector(".content");

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

function ScreenLogic() {
  var menu_button = document.querySelector(".menu-button");
  var content = document.querySelector(".screen-content");

  menu_button.addEventListener("click", (event) => {
    if (content.classList.contains("screen-menu-move-left")) {
      content.classList.replace(
        "screen-menu-move-left",
        "screen-menu-move-right"
      );
    } else if (content.classList.contains("screen-menu-move-right")) {
      content.classList.replace(
        "screen-menu-move-right",
        "screen-menu-move-left"
      );
    } else {
      content.classList.add("screen-menu-move-left");
    }
  });
}

function FillInfo() {
  var url = document.URL;
  var name = document.querySelector(".senser-info h1");
  var sub_info = document.querySelector(".senser-info .info p");
  var describe = document.querySelector(".senser-info .body p");

  if (url.search("en")) {
    if (name != null) name.textContent = movieInfo.SpiderManNoWayHome.title.eng;
    if (sub_info != null)
      sub_info.textContent =
        movieInfo.SpiderManNoWayHome.year +
        " • " +
        movieInfo.SpiderManNoWayHome.genre.eng +
        " • " +
        movieInfo.SpiderManNoWayHome.timeline.eng;
    if (describe != null)
      describe.textContent = movieInfo.SpiderManNoWayHome.describe.eng;
  }
}
