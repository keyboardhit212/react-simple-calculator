import Operator from "../classes/operator/operator.mjs";
import Add from "../classes/operator/add.mjs";
import Utils from '../classes/operator/operatorUtils.mjs'
import ExpressionUtils from "../classes/expressionUtils.mjs";
import PostfixConverter from "../classes/postfixConverter.mjs";

console.log(ExpressionUtils.isOperator('/'));

console.log(new PostfixConverter("7 + 8 - 2 x 10 - ( 7 + 8 x 2 )").evaluate());