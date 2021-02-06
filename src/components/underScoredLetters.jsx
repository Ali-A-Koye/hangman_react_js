import React from 'react';



function underScored(props) {
    return (
        <div>
            <h2>The Chosen name is : </h2>

            <h2 id="underscored"> {props.name.split("").map(val => `${val} `)} </h2>

        </div>
    );
}

export default underScored;
