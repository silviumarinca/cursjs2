import { Cell } from "../../cell.js";
 
export class RowsCheck {
  constructor(cells) {
    this.cells = cells;
    this.score = 0;
  }
  checkForRowCompletion(from, length) {
    let row_completed = true;
    for (let i = from; i < from + length; i++) {
      for (let j = 0; j < this.cells[0].length; j++) {
        if (this.cells[i][j].isEmpty) {
          row_completed = false;
          break;
        }
      }
      if (row_completed) {
        this.removeCompletedRow(i);
      }
      row_completed = true;
    }
  }
  removeCompletedRow(from) {
    for (let j = 0; j < this.cells[0].length; j++) {
      this.cells[from][j].isEmpty = true;
      this.cells[from][j].draw("#7facf5");
    }
    this.score += 10;
    this.moveItemsDown(from);
  }
  moveItemsDown(from) {
     
      this.cells.splice(from,1);
      let first_row=[];
      //trece randul un pas in fata sa ocupe randul complet
      for (let i = 0; i < from; i++) {
        for (let j = 0; j < this.cells[0].length; j++) { 
          this.cells[i][j].x=i+1;
        }
      }
      //se face un nou rand pentru randul sters
      for (let j = 0; j < this.cells[0].length; j++) {
        first_row.push(new Cell(0, j, "#7facf5"));
      }
      //randul este adaugat in fata
      this.cells.unshift(first_row)
 
      //redesenare cu noiele specificatii
    for (let i = 0; i < this.cells.length; i++) {
      for (let j = 0; j < this.cells[0].length; j++) { 
        this.cells[i][j].draw(this.cells[i][j].color);
       
      }
    }
//     //bordez cu rand gol
//     for (let j = 0; j < this.cells[0].length; j++) {
//       this.cells[0][j].isEmpty = true;
//       this.cells[0][j].draw("#7facf5");
//     }
//   }
  }
}
