import { Shape } from './shape.js';
import { GenerateTransposeModels } from './utils/transposemodel.js';
export class L extends Shape {
    #models
    constructor(row, column, cells) {
        super(row, column, cells, 'orange');
        this.template = [
            [1, 0],
            [1, 0],
            [1, 1]
        ];
        this.#models=GenerateTransposeModels(this.template);
    }

    getTemplates() {
        // const template_1 = [
        //     [1, 0],
        //     [1, 0],
        //     [1, 1]
        // ];
       

        return this.#models;
    }
}