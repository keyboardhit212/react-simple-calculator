import OperatorUtils from "./operator/operatorUtils.mjs";

export default class ExpressionUtils {

    static split(expression) {
        return String(expression).split(" ");
    }

    static isValue(token) {
        switch(token) {
            case '+':
            case '-':
            case '/':
            case 'x':
            case '*':
            case '(':
            case ')':
                return false;
            default:
                return true;
        }
    }

    static isOperator(token) {
        try {
            OperatorUtils.whichOperator(token);
            return true;
        }
        catch (err) {
            return false;
        }
    }

    static isParenthesisValid(expression) {
        const tokens = String(expression).split(" ");
        let parenthesis = 0;
        for (const token of tokens) {
            if (token === '(')
                parenthesis++;
            else if (token === ')')
                parenthesis--;
        }
        if (parenthesis === 0)
            return true;
        return false;
    }
}

