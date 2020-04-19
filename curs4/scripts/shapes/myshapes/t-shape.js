import {Shape} from '../Shape/shape.js';
export class T extends Shape {
    constructor(row, column, cells) {
      super( row,column,[
            [1, 1, 1],
            [0, 1, 0] 
        ],cells,'brown')
    }

  
}