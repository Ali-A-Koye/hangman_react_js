import React, { useState, useEffect } from 'react';
import UnderScored from './underScoredLetters';
import GetHint from './GetHint';
import axios from 'axios'

function Letters(props) {

    const letters = []
    const [pickedName, setPickedName] = useState("ALIAKOYE");
    let [Counter, SetCounter] = useState(10);

    const HiddenName = (pickedName.split("").map(el => "_").join(""));
    const [NameGenerated, SetNameGenerated] = useState(HiddenName);
    for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
        letters.push(String.fromCharCode(i));
    }

    const hint = () => {

        let hint = pickedName.split("");
        let generator = NameGenerated.split("");

        for (let i = 0; i < hint.length; i++) {
            if (pickedName[i] != 0) {
                generator[i] = hint[i];
                SetNameGenerated(generator.join(""));
                break;
            }
        }


    }
    const clickedLetter = (e, v) => {
        if (pickedName.includes(v)) {
            let index = pickedName.indexOf(v);
            setPickedName(pickedName.replace(v, 0));
            let newString = NameGenerated.split("");
            newString[index] = pickedName[index];
            SetNameGenerated(newString.join(""))
        }
        else {
            if (Counter === 1) {
                props.endGame();
            } else {
                SetCounter(Counter - 1);
            }
        }

    }
    return (
        <div>
            <h1 id="counter">{Counter}</h1>
            {letters.map((value, index) => {
                return <button key={index}
                    onClick={((e) => clickedLetter(e, value.toUpperCase()))} class="letters">{value.toUpperCase()}</button>
            })}
            <UnderScored name={NameGenerated}></UnderScored>


            <GetHint hint={hint}></GetHint>

        </div>
    );

}

export default Letters;
