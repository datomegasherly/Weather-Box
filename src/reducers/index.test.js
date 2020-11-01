import rootReducer from './';
import actionTypes from '../actionTypes';

describe('selectedCities', () => {
    it('return `[]` when no action exists', () => {
        let newState = rootReducer(undefined, {}).selectedCities;
        expect(newState).toEqual([]);
    });
    it('update state when receive a string in action payload from actions', () => {
        let newState = rootReducer(undefined, {type: actionTypes.CURRENT_CITY, payload: 'test'}).selectedCities;
        expect(newState).toEqual(['test']);
    });
});