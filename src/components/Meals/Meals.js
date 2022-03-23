import React, { Fragment } from 'react';
import AvalaibleMeals from './AvalaibleMeals';
import MealsSummary from './MealsSummary';

const Meals = () => {
    return (
        <React.Fragment>
            <MealsSummary/>
            <AvalaibleMeals/>
        </React.Fragment>
    );
};

export default Meals;