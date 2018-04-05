import React, { Component } from 'react';
import Header from './header';
import Button from './button';
import Next from './next_button';
import '../assets/css/diet-selection.css';

//add method that adds class to add button color when clicked 

class DietSelection extends Component {    
    render() {
        return (
        <div className="container">
            <Header title={'What\'s Your Type?'}/>
            <div className="collection center-align">
                <Button title={'None'} descrip={'Ain\'t Scared Of Shit'} style={'button'} />  
                <Button title={'Ketogenic'} descrip={'Coachella Bod Meal Plan'} style={'button'} />     
                <Button title={'Vegetarian'} descrip={'Straight Veggies N\' A Side Of Eggs'} style={'button'} />   
                <Button title={'Vegan'} descrip={'Literally Straight Veggies'} style={'button'} />   
                <Button title={'Pescatarian'} descrip={'Fish N\' Greens'} style={'button'} />
            </div>  
            <div className="right">
                <Next />                  
            </div>     
        </div>
        );
    };
};

export default DietSelection;