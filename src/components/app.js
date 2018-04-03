import React from 'react';
import '../assets/css/app.css';
import Clock from './clock';
import logo from '../assets/images/logo.svg';

const App = () => (
    <div>
        <div className="app">
            <img src={logo} className="logo rotate"/>
            <h1>Welcome to React</h1>
            <Clock />
        </div>
    </div>
);

export default App;
