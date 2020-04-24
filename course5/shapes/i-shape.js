import { Shape } from "./shape.js";
import { GenerateTransposeModels } from './utils/transposemodel.js';
export class I extends Shape {
    #models
    constructor(row, column, cells) {
        super(row, column, cells, 'blue');
        this.template = [[1],
        [1],
        [1],
        [1]];
        this.#models=GenerateTransposeModels(this.template);
    }

    getTemplates() {
        // const template_1 = [
        //     [1],
        //     [1],
        //     [1],
        //     [1]
        // ];
       
        return this.#models;
    }
}