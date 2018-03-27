import React from 'react';
import logo from '../assets/images/logo.svg';
import Hello from './hello';
import Goodbye from './goodbye';
import Middle from './middle';
import '../assets/css/app.css';

const App = () => (
    <div>
        <div className="app">
            <Hello />
            <Middle />
            <Goodbye />
        </div>
    </div>
);

export default App;
