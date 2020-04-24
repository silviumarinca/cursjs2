import { Shape } from "./shape.js";
import { GenerateTransposeModels } from './utils/transposemodel.js';
export class S extends Shape {
    #models
    constructor(row, column, cells) {
        super(row, column, cells, 'red');
        this.template = [
            [0, 1, 1],
            [1, 1, 0]
        ];
        this.#models=GenerateTransposeModels(this.template);
    }

    getTemplates() {
        
        return this.#models;
    }
}