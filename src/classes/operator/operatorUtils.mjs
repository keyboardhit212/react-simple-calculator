import Add from './add.mjs';
import Subtract from './subtract.mjs';
import Multiply from './multiply.mjs';
import Divide from './divide.mjs';
import Parenthesis from './parenthesis.mjs';

export default class OperatorUtils {

    static whichOperator(token) {
        switch(token) {
            case '+':
                return new Add();
            case '-':
                return new Subtract();
            case 'x':
                return new Multiply();
            case '*':
                return new Multiply();
            case '/':
                return new Divide();
            case '(':
                return new Parenthesis();
            default:
                throw new Error('Invalid Token!');
        }
    }
}