import { shallow } from 'enzyme';
import React from 'react';
import { getByAttr } from '../../test/testUtils';

import Weather from './Weather';

const setup = (props = {}) => {
    return shallow(<Weather {...props} />);
}

it('Weather component render test', () => {
    const wrapper = setup();
    const component = getByAttr(wrapper, 'weather-component');
    expect(component.length).toBe(1);
});