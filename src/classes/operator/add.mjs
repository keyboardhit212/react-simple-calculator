import Operator from './operator.mjs';

export default class Add extends Operator {

    constructor() {
        super();
        this.symbol = '+';
        this.precedence = 1;
    }

}