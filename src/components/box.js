import React from 'react';

export default props => {
    console.log('Box Prop:', props);
    const boxStyle = {
        display: 'inline-block',
        height: '150px',
        width: '150px',
        backgroundColor: props.color,
        transitionDuration: '500ms',
        margin: '15px',
        borderRadius: '50%'
    }
    return <div style={boxStyle}/>
}