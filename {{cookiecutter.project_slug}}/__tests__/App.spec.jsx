/* eslint-disable import/first */
import React from 'react';
import { shallow } from 'enzyme';

import App from 'App';

describe('The App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />,
    );
  });

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
