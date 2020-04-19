import {Shape} from '../Shape/shape.js';
 

export class Z extends Shape {
    constructor(row, column, cells) {
      super( row,column,[
        [1, 1, 0],
        [0, 1, 1]  
        ],cells,'black')
     
    }

 
 
}