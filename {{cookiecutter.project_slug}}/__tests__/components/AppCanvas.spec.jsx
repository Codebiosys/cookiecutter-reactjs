
import React from 'react';
import { shallow } from 'enzyme';

import AppCanvas from 'components/AppCanvas';

const canvasProps = {
  children: ('children'),
  messenger: ('messenger'),
};

describe('The App Canvas', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <AppCanvas {...canvasProps} />,
      );
  });

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('displays children in the app body', () => {
    expect(wrapper.find({ className: 'App__body' }).contains(canvasProps.children)).toBe(true);
  });

  it('has the Messenger Widget', () => {
    expect(wrapper.find({ className: 'App' }).contains(canvasProps.messenger)).toBe(true);
  });
});
