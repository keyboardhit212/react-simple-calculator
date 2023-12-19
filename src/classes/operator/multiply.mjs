import Operator from './operator.mjs';

export default class Multiply extends Operator {

    constructor() {
        super();
        this.symbol = 'x';
        this.precedence = 2;
    }
}