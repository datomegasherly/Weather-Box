import { shallow } from 'enzyme';
import React from 'react';
import { getByAttr, checkPropType, storeFactory } from '../../test/testUtils';

import City from './City';

const setup = (state) => {
    const store = storeFactory(state);
    return shallow(<City store={store} />).dive().dive();
}

it('City component render test', () => {
    const wrapper = setup();
    const component = getByAttr(wrapper, 'city-component');
    expect(component.length).toBe(1);
});

it('render select city Input', () => {
    const wrapper = setup();
    const selectCityInput = getByAttr(wrapper, 'select-city-input');
    expect(selectCityInput.length).toBe(1);
})

it('Check selectCity prop to be function', () => {
    const state = { selectedCities: [] };
    const wrapper = setup(state);
    checkPropType(wrapper, 'selectCity');
});