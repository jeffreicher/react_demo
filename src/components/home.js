import React from 'react';
import {
    Link
} from 'react-router-dom';

const Home = () => (
    <div>
        <div>
            <h1>This is my home page</h1>
        </div>
        <Link to="/about">About</Link>            
    </div>        
)



export default Home;