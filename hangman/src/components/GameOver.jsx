import React, { useState } from 'react';
import Dashboard from './dashboard';

let sad = new Audio("./sad.mp3");



function GameOver(props) {


    const [backToHome, setBackToHome] = useState(false);
    function changeState() {
        setBackToHome(true);
    }
    let componenet;

    if (backToHome) {
        sad.pause();
        componenet = <Dashboard />
    } else {
        sad.play();
        componenet = <div>
            <h1>Game Over</h1>
            <img id="img" src="https://media.giphy.com/media/IbDwn4MZUE4OQ/giphy.gif" alt="guyg"></img>
            <br></br>
            <button id="PlayAgain" onClick={changeState} class="btn"> Play Again </button>
        </div>
    }

    return (
        <div className="upperPart">
            { componenet}
        </div>

    );
}

export default GameOver;
