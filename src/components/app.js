import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import Header from './header';
import Button from './button';

const App = () => (
    <div>
        <div>
            <Header />
            <div className="container">
                <Button title={'Paleo'} descrip={'Live Like Your Ancestors'} />  
                <Button title={'Low Carb'} descrip={'Coachella Bod Meal Plan'} />     
                <Button title={'Vegetarian'} descrip={'Straight Veggies'} />   
                <Button title={'Carnivore'} descrip={'Meal Is Life'} />   
                <Button title={'Pescatarian'} descrip={'Fish N Greens'} />
            </div>   
            <div className="float-right">
                <Button title={'Next'} />
            </div>         
        </div>
    </div>
);

export default App;
