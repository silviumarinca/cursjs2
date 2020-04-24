import { Shape } from './shape.js';
import { GenerateTransposeModels } from './utils/transposemodel.js';
export class T extends Shape {
    #models
    constructor(row, column, cells) {
        super(row, column, cells, 'magenta');
        this.template = [
            [1, 1, 1],
            [0, 1, 0]
        ];
        this.#models=GenerateTransposeModels(this.template);
    }

    getTemplates() {
        const template_1 = [
            [1, 1, 1],
            [0, 1, 0]
        ],
        template_2 = [
            [0, 1],
            [1, 1],
            [0, 1]
        ],
        template_3 = [
            [0, 1, 0],
            [1, 1, 1]
        ],
        template_4 = [
            [1, 0],
            [1, 1],
            [1, 0]
        ]; 
        return this.#models;
    }
}