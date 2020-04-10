/// Exercitiul 1
(function () {
  const container = document.getElementById("container");
  const canvas = document.createElement("canvas");
  container.append(canvas);
  const context = canvas.getContext("2d");
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  (function (ctx) {
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.fillStyle = "yellow";
    ctx.fill();

    // Mouth (clockwise)
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);
    //left eye
    ctx.moveTo(70, 55);
    ctx.arc(60, 55, 10, 0, Math.PI * 2, true);

    ctx.moveTo(62, 55);
    ctx.arc(60, 55, 2, 0, Math.PI * 2, true);
    ctx.fillStyle = "red";
    ctx.fill();
    // Right eye
    ctx.moveTo(100, 55);
    ctx.arc(90, 55, 10, 0, Math.PI * 2, true);

    ctx.moveTo(92, 55);
    ctx.arc(90, 55, 2, 0, Math.PI * 2, true);

    ctx.stroke();
  })(context);
  //Exercitiul 2

  var patrat = new Patrat("blue", 50);
  patrat.Draw(context, 200, 10);
  var triunghi = new TriunghiEchilateral("yellow", 100);
  triunghi.Draw(context, 200, 200);
})();

///exercitiul 3
const container2 = document.getElementById("second_container");
const canvas2 = document.createElement("canvas");
container2.append(canvas2);
const context2 = canvas2.getContext("2d");

canvas2.width = container2.clientWidth;
canvas2.height = container2.clientHeight;
class Circle {
  constructor(x, y, radius, color, headLeft) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.dx = 1;
    this.dy = 1;
    this.increaseDiameter = 0;
    this.isleft = false;
    if (headLeft) this.goLeft();
    else this.goRight();
  }

  draw() {
    context2.beginPath();
    context2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context2.stroke();
    context2.fillStyle = this.color;
    context2.fill();
    context2.closePath();
  }

  move(stepX, stepY) {
    //Problem whem moving and step is larger than radix
    this.modifyDiameter();
    this.changeDirectionIfExceededBounds(); // The movement is made only left and right
    this.x += stepX * this.dx; // this.x = this.x + stepX;
    this.y += stepY * this.dy;
    this.draw();
  }

  modifyDiameter() {
    if (this.radius > 1) {
      this.radius += this.increaseDiameter;
    }
  }

  goLeft() {
    this.color = "Green";
    this.increaseDiameter = -1;
  }
  goRight() {
    this.color = "yellow";
    this.increaseDiameter = 1;
  }
  changeDirectionIfExceededBounds() {
    if (this.x >= canvas2.width - this.radius) {
      this.dx = -1;
      this.goLeft();
    }
    if (this.y >= canvas2.height - this.radius) {
      this.dy = -1;
    }
    if (this.x <= this.radius) {
      this.dx = 1;
      this.goRight();
    }
    if (this.y <= this.radius) {
      this.dy = 1;
    }
  }
}

let circle = new Circle(30, 100, 30, "green", false, context2);
circle.draw();

function moveItems() {
  context2.clearRect(0, 0, canvas2.width, canvas2.height);
  circle.move(10, 0);
}

window.setInterval(moveItems, 50);