import React from 'react';

function Greeting(props){
    console.log('Greeting Prop: ', props);

    const { name, favColor } = props;

    const greetingStyle = {
        color:favColor
    };

    return <h1 style= {greetingStyle}>Hello {name}, welcome to my site!</h1>
}

export default Greeting;

