import { selectCity } from './';
import actionTypes from '../actionTypes';

describe('selectCity', () => {
    it('return correct object when city:`test` send to function', () => {
        const func = selectCity('test');
        expect(func).toEqual({type: actionTypes.SET_CITY, payload: 'test'});
    });
})