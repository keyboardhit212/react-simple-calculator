import './Button.css';
import PostfixConverter from '../../classes/postfixConverter.mjs';

function Button(props) {

    function clickIt() {
        if (isOperand(props.label)) {
            props.setEquation((previousValue) => `${previousValue} ${props.label} `);
        } else {
            if (props.label === 'AC')
                props.setEquation('');
            else if (props.label === 'C')
                props.setEquation('');
            else if (props.label === '=') {
                props.setEquation((previousValue) => {
                    try {
                        const currentExpression = String(previousValue).replaceAll("  ", " ").trim();
                        const postfix = new PostfixConverter(currentExpression);
                        return postfix.evaluate();
                    }   
                    catch (err) {
                        return "Invalid Expression";
                    }
                });
            }
            else
                props.setEquation((previousValue) => previousValue + props.label)
        }
    }

    function isOperand(operand) {
        if (operand === '+' || operand === '-' 
        || operand === '/' || operand === 'x' 
        || operand === '(' || operand === ')')
            return true;
        return false;
    }

    return (
        <button style={(props.label === "=") ? {background: '#448AFF'} : {}} className="App-button" onClick={clickIt}>{props.label}</button>
    );
}

export default Button;