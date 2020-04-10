
 
const canvas = document.getElementById('canvasId');
const context = canvas.getContext("2d");

const rows = 20;
const columns = 10;
const width = 30;
const height = 30;

let grid = [];

const createGrid = () => {
    for (let row = 0; row < rows; row++) {
        grid[row] = [];
        for (let column = 0; column < columns; column++) {
            grid[row][column] = new Cell(row, column, (row-column+1) % 2 ? 'red' : 'blue',context);
        }
    }
}

const drawGrid = () => {
    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            grid[row][column].draw();
        }
    }
}

createGrid();
drawGrid();

 





class Square extends Cell{
    constructor(row,col){
        super(row,col,'green',myctx) 
    } 
    

}
//exercitiu5
var canvassquares=document.getElementById("canvasdrawSquares");
var myctx=canvassquares.getContext("2d");
var square =new Square(2,3);
square.draw();
var sq2=new Square(5,7); sq2.draw()