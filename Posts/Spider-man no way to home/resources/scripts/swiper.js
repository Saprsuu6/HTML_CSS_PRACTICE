export default class Swiper {
  constructor() {
    this.x1 = null;
    this.y1 = null;
  }

  handleTochStart = (firstTouch) => {
    this.x1 = firstTouch.clientX;
    this.y1 = firstTouch.clientY;
  };

  handleTochMove = (firstTouch, htmlElement, gradient) => {
    if (this.x1 == null || this.y1 == null) {
      return;
    }

    console.log(gradient);

    var x2 = firstTouch.clientX;
    var y2 = firstTouch.clientY;

    var xDiff = x2 - this.x1;
    var yDiff = y2 - this.y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) console.log("right");
      else console.log("left");
    } else {
      if (yDiff > 0) {
        htmlElement.classList.replace(
          "senser-info-move-up",
          "senser-info-move-down"
        );
      } else {
        if (htmlElement.classList.contains("senser-info-move-down")) {
          htmlElement.classList.replace(
            "senser-info-move-down",
            "senser-info-move-up"
          );
        } else htmlElement.classList.add("senser-info-move-up");
      }
    }
  };

  ResetCoords = () => {
    this.x1 = null;
    this.y1 = null;
  };
}
