import React from 'react';
import LIAR from './imgs/LIAR.jpg';

export default () => {
    const containerDesign = {
        border: '2px blue dotted',
        borderRadius: '10px'        
    }

    const goodbyeStyle = {
        color: 'tan',
        textAlign: 'center'
    }

    return (
        <div style={containerDesign}>
          <div style={goodbyeStyle}>Goodbye!</div>  
          <img src={LIAR} />
        </div>        
    );
}

