import React, { useState } from 'react';
import UnderScored from './underScoredLetters';
//import axios from 'axios'


// const nameGenerator = async () => {
//     let name = await axios.get('https://random-word-api.herokuapp.com/word?number=1');
//     name = name.data[0];
//     return name;
// }

function Letters(props) {
    const letters = []
    const [pickedName, setPickedName] = useState("ALIA");
    const HiddenName = (pickedName.split("").map(el => "_").join(""));
    const [NameGenerated, SetNameGenerated] = useState(HiddenName);

    for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
        letters.push(String.fromCharCode(i));
    }

    const clickedLetter = (e, v) => {
        if (pickedName.includes(v)) {
            let index = pickedName.indexOf(v);
            setPickedName(pickedName.replace(v, 0));
            let newString = NameGenerated.split("");
            newString[index] = pickedName[index];
            SetNameGenerated(newString.join(""))
        } else {
            alert("error");
        }

    }
    return (
        <div>
            {letters.map((value, index) => {
                return <button key={index}
                    onClick={((e) => clickedLetter(e, value.toUpperCase()))} class="letters">{value.toUpperCase()}</button>
            })}
            <UnderScored name={NameGenerated}></UnderScored>

        </div>
    );
}

export default Letters;
