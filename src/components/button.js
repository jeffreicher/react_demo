import React from 'react';

export default props => {
    function handleClick(){
        console.log('clicked');
        props.updateColor();
    }    
    return (
        <div>
            <button className='btn btn-outline-primary' onClick={handleClick}>Click Me</button>
        </div>
    )
}