import Operator from './operator.mjs';

export default class Subtract extends Operator {

    constructor() {
        super();
        this.symbol = '-';
        this.precedence = 1;
    }
}