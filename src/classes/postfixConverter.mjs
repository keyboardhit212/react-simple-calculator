import ExpressionUtils from "./expressionUtils.mjs";
import OperatorUtils from "./operator/operatorUtils.mjs";
import Parenthesis from "./operator/parenthesis.mjs";


export default class PostfixConverter {

    constructor(expression) {
        if (!ExpressionUtils.isParenthesisValid(expression))
            throw new Error("Uneven Parenthesis");
        this.expression = ExpressionUtils.split(expression);
        this.operatorStack = [];
        this.resultStack = [];
        this.#convert(this.expression);
    }

    getResult() {
        return this.resultStack;
    }

    evaluate() {
        const digits = [];
        for (const token of this.resultStack) {
            if (ExpressionUtils.isOperator(token)) {
                let num2 = digits.pop();
                let num1 = digits.pop();
                switch (token) {
                    case '+':
                        digits.push(num1 + num2);
                        break;
                    case '-':
                        digits.push(num1 - num2);
                        break;
                    case 'x':
                    case '*':
                        digits.push(num1 * num2);
                        break;
                    case '/':
                        digits.push(num1 / num2);
                        break;
                }
            }
            else {
                digits.push(Number(token));
            }
        }
        return digits[0];
    }

    #convert(expression) {
        for (const token of this.expression) {
            if (ExpressionUtils.isValue(token)) {
                this.resultStack.push(Number(token))
            }
            else if (ExpressionUtils.isOperator(token) && token !== '(' && token !== ')') {
                const currentOperator = OperatorUtils.whichOperator(token);
                while (!this.#isOperatorEmpty() && 
                    this.#operatorPeek().precedence >= currentOperator.precedence) {
                        this.resultStack.push(this.operatorStack.pop().symbol);
                    }
                    this.operatorStack.push(currentOperator)
            }
            else if (token === '(') {
                const currentOperator = OperatorUtils.whichOperator(token);
                this.operatorStack.push(currentOperator);
            }
            else if (token === ')') {
                while (!this.#isOperatorEmpty() && !(this.#operatorPeek() instanceof Parenthesis)) {
                    this.resultStack.push(this.operatorStack.pop().symbol);
                }
                //Remove the Parenthesis
                this.operatorStack.pop();
            }
        }
        while (this.operatorStack.length !== 0) {
            this.resultStack.push(this.operatorStack.pop().symbol);
        }
    }

    #operatorPeek() {
        if (this.operatorStack[this.operatorStack.length - 1] !== undefined)
            return this.operatorStack[this.operatorStack.length - 1];
        return 0;
    }

    #isOperatorEmpty() {
        if (this.operatorStack.length !== 0)
            return false;
        return true;
    }
}