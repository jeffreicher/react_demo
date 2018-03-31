import React, { Component } from 'react';
import Header from './header';
import Button from './button';
import Next from './next_button';

//add method that adds class to add button color when clicked 

class DietSelection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selections: []
        }
    }
    render() {
        return (
        <div>
            <Header title={'What\'s Your Type?'}/>
            <div className="container center-align">
                <Button title={'Paleo'} descrip={'Live Like Your Ancestors'} style={'button a:active'} />  
                <Button title={'Low Carb'} descrip={'Coachella Bod Meal Plan'} style={'button'} />     
                <Button title={'Vegetarian'} descrip={'Straight Veggies'} style={'button'} />   
                <Button title={'Carnivore'} descrip={'Meat Is Life'} style={'button'} />   
                <Button title={'Pescatarian'} descrip={'Fish N Greens'} style={'button'} />
            </div>  
            <div className="right">
                <Next />                  
            </div>     
        </div>
        );
    };
};

export default DietSelection;