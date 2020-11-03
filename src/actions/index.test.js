import { selectCity } from './';
import actionTypes from '../actionTypes';

describe('selectCity', () => {
    it('return correct object when city:`{id:1, name:`test`}` send to function', () => {
        const func = selectCity({id: 1,name: 'test'});
        expect(func).toEqual({type: actionTypes.SET_CITY, payload: {id: 1, name: 'test'}});
    });
})