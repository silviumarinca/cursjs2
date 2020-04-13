
 
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

class Square2Cells{
  
    constructor(row,col,numcell){
        //super(row,col,'green',myctx) 
      this.row=row;
      this.col=col;
      this.numcell=numcell;
    } 
    draw(){
      
      for(let i=0;i<this.numcell;i++){
        for(let j=0;j<this.numcell;j++){
           new  Cell(this.row+i,this.col+j,'yellow',myctx)
                .draw();
        }

      }

    }
    

}
//exercitiu5
var canvassquares=document.getElementById("canvasdrawSquares");
var myctx=canvassquares.getContext("2d");
var square =new Square(2,3);
square.draw();
var sq2=new Square(5,7); sq2.draw()

var sq3=new Square2Cells(1,1,3); sq3.draw()
var sq3=new Square2Cells(7,1,2); sq3.draw()

var sq3=new Square2Cells(9,2,4); sq3.draw()
