import {Shape} from '../Shape/shape.js';
 ``
export class J extends  Shape {
    constructor(row, column, cells) {
        super(row,
            column,
            [
                [0, 1],
                [0, 1],
                [1, 1] 
            ],
            cells,
            'pink'
            )
 
    }

    

 
}