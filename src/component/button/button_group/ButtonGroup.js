import './ButtonGroup.css';

function ButtonGroup(props) {
    return (
        <div className="ButtonGroup">
            {props.children}
        </div>
    )
}

export default ButtonGroup;