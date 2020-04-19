import {Movement } from '../Movement/movement.js'
export class Shape extends Movement {
  constructor(row, column, template,cells,color) {
    super(row,column) 
    this.template = template;
    this.color=color;
    this.cells=cells;
  }
  draw() {
    
    for (let row = 0; row < this.template.length; row++) {
      for (let column = 0; column < this.template[row].length; column++) {
        if (this.template[row][column] === 1) {
          this.cells[this.row + row][this.column + column].draw(this.color);
        }
      }
    }
  }
}
