import React from 'react';

function Greeting(props){
    console.log('Greeting Prop: ', props);
    return <h1>Hello {props.name}, welcome to my site!</h1>
}

export default Greeting;

