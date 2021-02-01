import React from 'react';
import Letters from './letters';
import axios from 'axios'

const getName = async () => {
    let word = axios.get("https://random-word-api.herokuapp.com/word?number=1");

    return word[0];
}
function game() {
    return (
        <div>
            <h1>HangMan Game</h1>
            <p>Use the alphabet below to guess the word, or click hint to get a clue</p>

            <Letters selectedWord={getName()} />
        </div>
    );
}

export default game;
