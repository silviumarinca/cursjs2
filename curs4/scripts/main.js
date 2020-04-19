import { Grid } from "./grid.js";
import { L } from "./shapes/l-shape.js";
import { J } from "./shapes/MyShapes/j-shape.js";
import { Z } from "./shapes/MyShapes/z-shape.js";
import { O } from "./shapes/o-shape.js";
import { T } from "./shapes/MyShapes/t-shape.js";
import { I } from "./shapes/MyShapes/I-shape.js";
import { S } from "./shapes/MyShapes/s-shape.js";
// import { O } from './shapes/o-shape.js';

const rows = 20;
const columns = 10;

const grid = new Grid(rows, columns);
grid.create();
grid.draw();

//TODO - why 0.
const zShape = new Z(0, 4, grid.cells);
zShape.draw();

const myshapes = [
  new J(0, 1, grid.cells),
  new Z(0, 4, grid.cells),
  new O(0, 7, grid.cells),
  new T(4, 5, grid.cells),
  new I(4, 9, grid.cells),
  new S(4, 0, grid.cells),
  new L(4, 3, grid.cells),
];
//exercitiu 1
myshapes.forEach((shape) => {
  shape.draw();
});
// const oShape = new O(5, 3, grid.cells);
// oShape.draw();
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

document.addEventListener("keydown", (event) => {
    console.log(event.key);
  switch (event.key) {
    case "ArrowUp":
      grid.draw();
      zShape.moveUp();
      zShape.draw();
      break;
    case "ArrowDown":
      grid.draw();
      zShape.moveDown();
      zShape.draw();
      break;
    case "ArrowLeft":
      grid.draw();
      zShape.moveLeft();
      zShape.draw();
      break;
    case "ArrowRight":
      grid.draw();
      zShape.moveRight();
      zShape.draw();
      break;
      case "Enter"://exercitiu 2
        grid.draw();
        myshapes.forEach((shape) => {
            shape.color=getRandomColor();
            shape.draw();
          });
      break;
  }
});

// setInterval(() => {
//     grid.draw();
//     zShape.moveDown();
//     zShape.draw();
// }, 500);

// function writeText(text, callback) {
//     console.log('Inainte de afisare');
//     console.log(text);
//     console.log('Dupa de afisare');
//     callback();
// }

// function writeEnd() {
//     console.log('The end.');
// }

// writeText('Salut!', writeEnd);
