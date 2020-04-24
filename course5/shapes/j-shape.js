import { Shape } from './shape.js';

import { GenerateTransposeModels } from './utils/transposemodel.js';
export class J extends Shape {
    #models
    constructor(row, column, cells) {
        super(row, column, cells, 'pink');
        this.template = [
            [0, 1],
            [0, 1],
            [1, 1]
        ];
        this.#models=GenerateTransposeModels(this.template);
    }

    getTemplates() {
         
      

        return this.#models;
    }
}