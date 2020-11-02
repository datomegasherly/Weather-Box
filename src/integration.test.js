import { storeFactory } from '../test/testUtils';
import { selectCity } from './actions';

describe('selectCity action dispatch', () => {
    it('no city selected yet', () => {
        const initialState = { selectedCities: [] };
        let store = storeFactory(initialState);
        store.dispatch(selectCity('city1'));
        const newState = store.getState();
        expect(newState.selectedCities).toEqual(['city1']);
    });
    it('some cities selected before', () => {
        const initialState = { selectedCities: [] };
        let store = storeFactory(initialState);
        store.dispatch(selectCity('city1'));
        store.dispatch(selectCity('city2'));
        const newState = store.getState();
        expect(newState.selectedCities).toEqual(['city1','city2']);
    });
});