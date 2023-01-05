export default class Swiper {
  constructor() {
    this.x1 = null;
    this.y1 = null;
  }

  handleTochStart = (firstTouch) => {
    this.x1 = firstTouch.clientX;
    this.y1 = firstTouch.clientY;
  };

  handleTochMove = (firstTouch, htmlElement) => {
    if (this.x1 == null || this.y1 == null) {
      return;
    }

    var x2 = firstTouch.clientX;
    var y2 = firstTouch.clientY;

    var xDiff = x2 - this.x1;
    var yDiff = y2 - this.y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) console.log("right");
      else console.log("left");
    } else {
      if (yDiff > 0) {
        if (htmlElement.classList.contains("senser-info-move-up")) {
          htmlElement.classList.remove("senser-info-move-up");
        }
        htmlElement.classList.add("senser-info-move-down");
      } else {
        if (htmlElement.classList.contains("senser-info-move-down")) {
          htmlElement.classList.remove("senser-info-move-down");
        }
        htmlElement.classList.add("senser-info-move-up");
      }
    }
  };

  ResetCoords = () => {
    this.x1 = null;
    this.y1 = null;
  };
}
