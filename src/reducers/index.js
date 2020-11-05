import { combineReducers } from 'redux';
import actionTypes from '../actionTypes';
import { listOfCities, apiKey } from '../helpers';

const citiesReducer = () => {
    return listOfCities;
}
/**
 * return API key for openweathermap.org
 */
const ApiKeyReducer = () => {
    return apiKey;
}

/**
 * @function selectedCitiesReducer Create an array with selected cities to show weather box
 * @param {Array} state 
 * @param {Object} action
 * @returns {Array}
 */
const selectedCitiesReducer = (state = [], action) => {
    switch(action.type){
        case actionTypes.SET_CITY:
            return [...state, action.payload];
        default:
            return state;
    }
}

export default combineReducers({
    selectedCities: selectedCitiesReducer,
    cities: citiesReducer,
    apiKey: ApiKeyReducer,
});