import { shallow } from 'enzyme';
import React from 'react';
import { getByAttr, storeFactory } from '../../test/testUtils';
import { selectCity } from '../actions';

import Weather from './Weather';

const setup = (store = {}) => {
    const wrapper = shallow(<Weather store={store} />).dive().dive();
    return wrapper;
}

it('Weather component render test', () => {
    const state = { selectedCities: [] };
    let store = storeFactory(state);
    const wrapper = setup(store);
    const component = getByAttr(wrapper, 'weather-component');
    expect(component.length).toBe(1);
});

it('Check open weather-box when a test city is selected', () => {
    const state = { selectedCities: [] };
    let store = storeFactory(state);
    store.dispatch(selectCity({id: 1, name: 'test'}));
    const wrapper = setup(store);
    const weatherBox = getByAttr(wrapper, 'weather-box');
    expect(weatherBox.length).toBe(1);
});

it('Check `selectedCities` prop type to be array', () => {
    const state = { selectedCities: [] };
    let store = storeFactory(state);
    store.dispatch(selectCity({id: 1, name: 'test'}));
    const wrapper = setup(store);
    const weatherStore = store.getState();
    expect(weatherStore.selectedCities).toEqual([{id: 1, name: 'test'}]);
});