import Screen from '../screen/Screen';
import SimpleInterface from '../interface/SimpleInterface';
import './Calculator.css';
import { useState } from 'react';


function Calculator() {

    const [equation, setEquation] = useState(() => '');

    return (
        <div className='Calculator'>
            <Screen equation={equation}/>
            <SimpleInterface setEquation={setEquation}/>
        </div>
    );
}

export default Calculator;