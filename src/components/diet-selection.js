import React, { Component } from 'react';
import Header from './header';
import Button from './button';
import Next from './next_button';
import '../assets/css/diet-selection.css';

class DietSelection extends Component {   
    constructor(props) {
        super(props);

        this.state = {
            selected: []
        };

        this.handleSelected = this.handleSelected.bind(this);
    };
    
    handleSelected(buttonObject) {
        console.log("This is the thing", buttonObject);
        const { selected } = this.state;

        if(!selected.includes(buttonObject.props.title)) {
            this.setState({
                selected: [...selected, buttonObject.props.title]
            });
        } else {
            debugger;
            //remove the item from the array and replace with new title
            let currentArray = selected;      
            currentArray.splice(0, 1);
            this.setState({
                selected: currentArray
            });
        };
    };

    render() {
        const { handleSelected } = this;

        return (
        <div className="container">
            <Header title={'What\'s Your Type?'}/>
            <div className="collection center-align">
                <Button title={'None'} descrip={'Ain\'t Scared Of Shit'} style={'button'} selectedCheck={ handleSelected } determineSelected={ this.state.selected.includes('None')} />  
                <Button title={'Ketogenic'} descrip={'Coachella Bod Meal Plan'} style={'button'} selectedCheck={ handleSelected } determineSelected={ this.state.selected.includes('Ketogenic')} />     
                <Button title={'Vegetarian'} descrip={'Straight Veggies With An Egg'} style={'button'} selectedCheck={ handleSelected } determineSelected={ this.state.selected.includes('Vegetarian')} />   
                <Button title={'Vegan'} descrip={'Literally Straight Veggies'} style={'button'} selectedCheck={ handleSelected } determineSelected={ this.state.selected.includes('Vegan')} />   
                <Button title={'Pescatarian'} descrip={'Fish N\' Greens'} style={'button'} selectedCheck={ handleSelected } determineSelected={ this.state.selected.includes('Pescatarian')} />
            </div>  
            <div className="right">
                <Next />                  
            </div>     
        </div>
        );
    };
};

export default DietSelection;