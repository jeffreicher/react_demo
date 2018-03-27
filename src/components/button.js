import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button className="btn btn-outline-primary">
                <b>{props.title}</b>
                <p>{props.descrip}</p>
            </button>
        </div>
    )
}

export default Button;