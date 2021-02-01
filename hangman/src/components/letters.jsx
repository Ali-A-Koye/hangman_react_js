import React from 'react';



function letters() {
    const letters = []

    for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
        letters.push(String.fromCharCode(i));
    }
    return (
        <div>
            {letters.map((value, index) => {
                return <button class="letters">{value.toUpperCase()}</button>
            })}


        </div>
    );
}

export default letters;
