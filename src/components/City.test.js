import { shallow } from 'enzyme';
import React from 'react';
import { getByAttr } from '../../test/testUtils';

import City from './City';

const setup = (props = {}) => {
    return shallow(<City {...props} />);
}

it('City component render test', () => {
    const wrapper = setup();
    const component = getByAttr(wrapper, 'city-component');
    expect(component.length).toBe(1);
});