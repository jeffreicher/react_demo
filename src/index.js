import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

const user = {
    firstName: 'Jeffrei',
    lastName: 'Cher'
}

const greeting = <h1>My name is {greetUser(user)} and I love React!</h1>;

function greetUser(user){
    return `${user.firstName} ${user.lastName}`;
}

ReactDOM.render(
    greeting,
    document.getElementById('root')
);
