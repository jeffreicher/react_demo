import React from 'react';
import { Route } from 'react-router-dom';
import DietSelection from './diet-selection';
import AllergySelection from './allergy-selection';
import MealNumber from './meal_number';
import 'materialize-css/dist/css/materialize.min.css';
import '../assets/css/diet-selection.css';


export default () => (
    <div className="container">
        <Route exact path="/" />
        <Route path="/diet-selection" component={DietSelection} />
        <Route path="/allergy-selection" component={AllergySelection} />
        <Route path="/mealnumber" component={MealNumber} />
    </div>
);
