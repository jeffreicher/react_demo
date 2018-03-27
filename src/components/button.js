import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button>
                <b>{props.title}</b>
                <p>{props.descrip}</p>
            </button>
        </div>
    )
}

export default Button;