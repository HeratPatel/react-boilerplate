import React from 'react';
import { shallow } from 'enzyme';
import Login from './login';

describe('<Login />', () => {
  it('Rendering', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });
});
