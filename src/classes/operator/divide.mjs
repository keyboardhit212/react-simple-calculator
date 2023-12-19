import Operator from './operator.mjs';

export default class Divide extends Operator {

    constructor() {
        super();
        this.symbol = '/';
        this.precedence = 2;
    }
}