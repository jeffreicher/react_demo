import React, { Component } from 'react';
import Header from './header';
import Button from './button';
import Next from './next_button';
import '../assets/css/allergy-selection.css';

class AllergySelection extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            selected: []
        };

        this.handleSelected = this.handleSelected.bind(this);
    };

    handleSelected(buttonObject) {
        console.log('The button object', buttonObject.props.title);
        const { selected } = this.state;
        const { title } = buttonObject.props;

        if(!selected.includes(title)) {
            this.setState({
                selected: [...selected, title]
            });
        } else {
            let currentSelected = selected;
            let itemLocation = currentSelected.indexOf(title);
            currentSelected.splice(itemLocation, 1);
            this.setState({
                selected: currentSelected
            });
        };
    };

    render() {
        const { handleSelected } = this;
        const { selected } = this.state;
        console.log(this.state.selected);
        return (
            <div className="container">
                <Header title={'Any Allergies?'} />
                <div className="row">
                    <Button title={'Gluten'} selectedCheck={ handleSelected } determineSelected={ selected.includes('Gluten')} />  
                    <Button title={'Dairy'} selectedCheck={ handleSelected } determineSelected={ selected.includes('Dairy')} />     
                    <Button title={'Tree Nut'} selectedCheck={ handleSelected } determineSelected={ selected.includes('Tree Nut')} />   
                    <Button title={'Peanuts'} selectedCheck={ handleSelected } determineSelected={ selected.includes('Peanuts')} />   
                    <Button title={'Shellfish'} selectedCheck={ handleSelected } determineSelected={ selected.includes('Shellfish')} />
                    <Button title={'Soy'} selectedCheck={ handleSelected } determineSelected={ selected.includes('Soy')} />
                    <Button title={'Egg'} selectedCheck={ handleSelected } determineSelected={ selected.includes('Egg')} />
                    <Button title={'Wheat'} selectedCheck={ handleSelected } determineSelected={ selected.includes('Wheat')} />
                    <Button title={'Sesame'} selectedCheck={ handleSelected } determineSelected={ selected.includes('Sesame')} />
                    <Button title={'Seafood'} selectedCheck={ handleSelected } determineSelected={ selected.includes('Seafood')} />
                    <Button title={'Sulfite'} selectedCheck={ handleSelected } determineSelected={ selected.includes('Sulfite')} />
                </div>  
                <div className="right bottom">
                <Next style={'bottom'}/>                  
                </div>  
            </div>
        );
    };
};

export default AllergySelection;