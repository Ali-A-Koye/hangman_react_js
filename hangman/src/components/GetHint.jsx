import React from 'react';



function underScored(props) {
    return (
        <div>
            <button class="btn HintBtn" onClick={props.hint}> Get Hint </button>
        </div>
    );
}

export default underScored;
