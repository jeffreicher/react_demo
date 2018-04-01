import React, { Component } from 'react';
import Header from './header';
import Button from './button';
import Next from './next_button';
import '../assets/css/allergy-selection.css';

class AllergySelection extends Component {
    render() {
        return (
            <div className="container">
                <Header title={'Any Allergies?'} />
                <div className="row">
                    <Button title={'Gluten'} style={'grey'} />  
                    <Button title={'Dairy'} style={'grey'} />     
                    <Button title={'Nuts'} style={'grey'} />   
                    <Button title={'Peanuts'} style={'grey'} />   
                    <Button title={'Shellfish'} style={'grey'} />
                    <Button title={'Soy'} style={'grey'} />
                    <Button title={'Eggs'} style={'grey'} />
                </div>  
                <div className="right bottom">
                <Next style={'bottom'}/>                  
                </div>  
            </div>
        );
    };
};

export default AllergySelection;