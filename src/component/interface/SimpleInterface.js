import ButtonGroup from '../button/button_group/ButtonGroup';
import Button from '../button/Button';
import './SimpleInterface.css';

function SimpleInterface({setEquation}) {
    return (
        <div className='SimpleInterface'>
            <ButtonGroup>
                <Button setEquation={setEquation} label="("/>
                <Button setEquation={setEquation} label=")"/>
                <Button setEquation={setEquation} label="C"/>
                <Button setEquation={setEquation} label="AC"/>
            </ButtonGroup>
            <ButtonGroup>
                <Button setEquation={setEquation} label="7"/>
                <Button setEquation={setEquation} label="8"/>
                <Button setEquation={setEquation} label="9"/>
                <Button setEquation={setEquation} label="/"/>
            </ButtonGroup>
            <ButtonGroup>
                <Button setEquation={setEquation} label="4"/>
                <Button setEquation={setEquation} label="5"/>
                <Button setEquation={setEquation} label="6"/>
                <Button setEquation={setEquation} label="x"/>
            </ButtonGroup>
            <ButtonGroup>
                <Button setEquation={setEquation} label="1"/>
                <Button setEquation={setEquation} label="2"/>
                <Button setEquation={setEquation} label="3"/>
                <Button setEquation={setEquation} label="-"/>
            </ButtonGroup>
            <ButtonGroup>
                <Button setEquation={setEquation} label="0"/>
                <Button setEquation={setEquation} label="."/>
                <Button setEquation={setEquation} label="="/>
                <Button setEquation={setEquation} label="+"/>
            </ButtonGroup>
        </div> 
    );
}

export default SimpleInterface;