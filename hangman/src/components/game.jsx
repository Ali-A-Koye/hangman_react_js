import React, { useState } from 'react';
import Letters from './letters';
import Dashboard from './dashboard';

function Game() {


    const [isEnded, setIsEnded] = useState(false);

    function endGame() {
        setIsEnded(true);
    }

    let gameEnded;
    if (!isEnded) {
        gameEnded =
            <div>
                <h1>HangMan Game</h1> <p>Use the alphabet below to guess the word, or click hint to get a clue
                </p>  <Letters endGame={endGame} /></div>;
    } else {
        gameEnded = <Dashboard />;
    }
    return (
        <div>
            {gameEnded}
        </div>
    );
}

export default Game;
