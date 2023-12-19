import './Screen.css';

function Screen(props) {
    return (
        <div className="App-screen"><span>{props.equation}</span></div>
    );
}

export default Screen;