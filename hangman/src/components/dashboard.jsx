import React from 'react';
import Swal from 'sweetalert2'
let audio = new Audio("./audio.mp3");
const activateSawAndSound = async () => {
    audio.play();

    await Swal.fire({
        imageUrl: 'https://pyxis.nymag.com/v1/imgs/09d/64c/95abab7ece31abcfb22867b5803384248b-24-saw-puppet.rsquare.w700.jpg',
        imageHeight: 500,
        imageAlt: 'A tall image'
    })

}


function upperPart(props) {

    return (
        <div className="upperPart">
            <h1>HangMan Game</h1>
            <h2> Live or die, the choice is yours </h2>
            <p>Press Start to Start the Game or Cancel</p>

            <button class="btn" onClick={props.startGame}> Start the Game </button>
            <button class="btn" onClick={props.startGame}> Cancel </button>
            <button class="btn" onClick={activateSawAndSound}> Help </button>
        </div>
    );
}

export default upperPart;
