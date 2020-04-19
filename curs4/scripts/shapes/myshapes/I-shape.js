
import {Shape} from '../Shape/shape.js';
export class I extends  Shape {
    constructor(row, column, cells) {
        super(row,
              column,
              [
                [1],
                [1],
                [1],
                [1]
            ],
                cells,
                "magenta")
      
    }
 
}