import { Validator } from "./validator.js";

export class Movement {
    constructor(shape, cells) {
        this.shape = shape;
        this.cells = cells;
        this.validator = new Validator(this.shape, this.cells);
        this.canMove = true;
        this.shapeInit=false;
    }

    up() {
        this.shape.row--;
    }
    gameOver(intervalId,externalfunc){
        clearInterval(intervalId); 
        externalfunc.call();
        console.log('game Over!!');
       

    }

    down(intervalId,gameOverfunc) {
        const { row, column } = this.shape;
         if(!this.shapeInit && !this.shape.canBeCleared()){ 
            this.gameOver(intervalId,gameOverfunc);
            this.canMove =false;
          return;
         }
        this.shapeInit=true; 
        this.shape.clear();
        const nextNotAvailable = this.validator.checkNext(row + 1, column);
        if (nextNotAvailable) {
           // if( this.validator.checkNext(row  , column) ){
            this.shape.draw();
          //  }
            if(row === 0) {
                this.gameOver(intervalId,gameOverfunc);
            }
            this.canMove = false;
            return ;
        }

        this.shape.row++;
        this.shape.draw();
    }

    left() {
        if(!this.shapeInit) return;
        const {row , column} = this.shape;
        this.shape.clear();

        const nextNotAvailable = this.validator.checkNext(row, column - 1);
        if (nextNotAvailable ) {
            this.shape.draw();
            return;
        }

        this.shape.column--;
        this.shape.draw();
    }

    right() {
        if(!this.shapeInit) return;
        const {row , column} = this.shape;
        this.shape.clear();

        const nextNotAvailable = this.validator.checkNext(row, column + 1);
        if (nextNotAvailable) {
            this.shape.draw();
            return;
        }

        this.shape.column++;
        this.shape.draw();
    }

    rotate() {
        const {row , column} = this.shape;

        this.shape.clear();
        const nextTemplate = this.shape.getTemplate(this.shape.templateIndex + 1);
        const nextNotAvailable = this.validator.checkNext(row, column, nextTemplate);
        if (nextNotAvailable) {
            this.shape.draw();
            return;
        }

        this.shape.rotate();
    }
}