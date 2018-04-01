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
                <div className="row center-align">
                    <Button title={'Gluten'} style={"col s3"}/>  
                    <Button title={'Dairy'} style={"col s3"} />     
                    <Button title={'Nuts'} style={"col s3"} />   
                    <Button title={'Peanuts'} style={"col s4"} />   
                    <Button title={'Shellfish'} style={"col s4"} />
                    <Button title={'Soy'} style={"col s2"} />
                    <Button title={'Eggs'} style={"col s3"} />
                </div>  
                <div className="right">
                <Next />                  
                </div>  
            </div>
        );
    };
};

export default AllergySelection;