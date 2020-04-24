import { Validator } from "./validator.js";

export class Movement {
    constructor(shape, cells) {
        this.shape = shape;
        this.cells = cells;
        this.validator = new Validator(this.shape, this.cells);
        this.canMove = true;
    }

    up() {
        this.shape.row--;
    }

    down() {
        const row = this.shape.row;
        const column = this.shape.column;
        this.shape.clear();
        const nextNotAvailable = this.validator.checkNext(row + 1, column);
        if (nextNotAvailable) {
            this.shape.draw();
            this.canMove = false;
            return;
        }

        this.shape.row++;
        this.shape.draw();
    }

    left() {
        const row = this.shape.row;
        const column = this.shape.column;
        this.shape.clear();

        const nextNotAvailable = this.validator.checkNext(row, column - 1);
        if (nextNotAvailable) {
            this.shape.draw();
            return;
        }

        this.shape.column--;
        this.shape.draw();
    }

    right() {
        const row = this.shape.row;
        const column = this.shape.column;
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
 
        this.shape.clear();
        const length = this.shape.getTemplates().length;

        this.shape.templateIndex++;
        const saveShapetemplate= this.shape.template;
        this.shape.template = this.shape.getTemplates()[this.shape.templateIndex % length]; 
        const row = this.shape.row;
        const column = this.shape.column; 
        const nextNotAvailable = this.validator.checkNext(row, column);
        if (nextNotAvailable) { 
            console.log("next not available");
            this.shape.templateIndex--;
            this.shape.template =saveShapetemplate;
            this.shape.draw();
            return;
        }

        this.shape.draw();
    }
}