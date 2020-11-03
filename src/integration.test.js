import { storeFactory } from '../test/testUtils';
import { selectCity } from './actions';

describe('selectCity action dispatch', () => {
    it('no city selected yet', () => {
        const initialState = { selectedCities: [] };
        let store = storeFactory(initialState);
        store.dispatch(selectCity({id:1, name:'test'}));
        const newState = store.getState();
        expect(newState.selectedCities).toEqual([{id:1, name:'test'}]);
    });
    it('some cities selected before', () => {
        const initialState = { selectedCities: [] };
        let store = storeFactory(initialState);
        store.dispatch(selectCity({id:1, name:'test'}));
        store.dispatch(selectCity({id:2, name:'test2'}));
        const newState = store.getState();
        expect(newState.selectedCities).toEqual([{id:1, name:'test'},{id:2, name:'test2'}]);
    });
});