import React from 'react';
import Letters from './letters';

function game() {
    return (
        <div>
            <h1>HangMan Game</h1>
            <p>Use the alphabet below to guess the word, or click hint to get a clue</p>

            <Letters />
        </div>
    );
}

export default game;
