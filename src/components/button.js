//description does not show up on button
import React from 'react';

export default props => (
    <div>
        <a className={`btn-desk waves-effect waves-light btn ${props.style}`}>
            {props.title} <br/>
            {props.descrip}
        </a>
    </div>
);
