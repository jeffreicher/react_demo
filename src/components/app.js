import React from 'react';
import '../assets/css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/logo.svg';
import Header from './header';
import Button from './button';
import Next from './next_button';

const App = () => {
    return (
    <div>
        <Header />
        <div className="container">
            <Button title={'Paleo'} descrip={'Live Like Your Ancestors'} />  
            <Button title={'Low Carb'} descrip={'Coachella Bod Meal Plan'} />     
            <Button title={'Vegetarian'} descrip={'Straight Veggies'} />   
            <Button title={'Carnivore'} descrip={'Meal Is Life'} />   
            <Button title={'Pescatarian'} descrip={'Fish N Greens'} />
        </div>   
        <Next />      
    </div>
    );
}



export default App;
