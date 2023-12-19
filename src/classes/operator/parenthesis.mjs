import Operator from "./operator.mjs";

export default class Parenthesis extends Operator {

    constructor() {
        super();
        this.symbol = "(";
        this.precedence = 0;
    }
}