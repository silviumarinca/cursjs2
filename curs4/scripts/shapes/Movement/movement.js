export class Movement{
 constructor(row,column){
    this.row=row;
    this.column=column;

 }
    moveUp() {
        this.row--;
    }

    moveDown() {
        this.row++;
    }

    moveLeft() {
        this.column--;
    }

    moveRight() {
        this.column++;
    }


}