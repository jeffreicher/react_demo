import React, { Component } from 'react';
import Header from './header';
import Button from './button';
import Next from './next_button';
import '../assets/css/mealNumber.css';

class MealNumber extends Component {
    render() {
        return (
            <div className="container">
                <Header title={'Amount Of Meals?'} />
                <div className="button-column collection">
                    <Button title={'1'} style={'grey'} />  
                    <Button title={'3'} style={'grey'} />
                    <Button title={'5'} style={'grey'} />   
                    <Button title={'7'} style={'grey'} />   
                </div>  
                <div className="right bottom">
                <Next style={'bottom'}/>                  
                </div>  
            </div>
        );
    };
};

export default MealNumber;