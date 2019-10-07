import React from 'react';
import { shallow } from 'enzyme';
import Router from './index';

describe('<Router />', () => {
  it('Rendering', () => {
    const wrapper = shallow(<Router />);
    expect(wrapper).toMatchSnapshot();
  });
});
