import { combineReducers } from 'redux';
import actionTypes from '../actionTypes';

/**
 * @function selectedCitiesReducer Create an array with selected cities to show weather box
 * @param {Array} state 
 * @param {Object} action
 * @returns {Array}
 */
const selectedCitiesReducer = (state = [], action) => {
    switch(action.type){
        case actionTypes.CURRENT_CITY:
            return [...state, action.payload];
        default:
            return state;
    }
}

export default combineReducers({
    selectedCities: selectedCitiesReducer
});