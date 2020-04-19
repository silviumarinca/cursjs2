import {Shape} from '../Shape/shape.js';
 
 export class S extends Shape {
    constructor(row, column, cells) {
        super(row,
              column,
              [
                 [0, 1, 1],
                 [1, 1, 0] 
              ],
              cells,
              "blue")
      
    }

 
}