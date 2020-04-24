import { Shape } from "./shape.js";
import { GenerateTransposeModels } from './utils/transposemodel.js';
export class Z extends Shape {
    #models;
    constructor(row, column, cells) {
        super(row, column, cells, 'green');
        this.template = [
            [1, 1, 0],
            [0, 1, 1]
        ];
        this.#models= GenerateTransposeModels(this.template);
    }

    getTemplates() {
        const template_1 = [
            [1, 1, 0],
            [0, 1, 1]
        ],
        template_2 = [
            [0, 1],
            [1, 1],
            [1, 0]
        ];
        return this.#models;
       // return GenerateTransposeModels(template_1);
    }
}