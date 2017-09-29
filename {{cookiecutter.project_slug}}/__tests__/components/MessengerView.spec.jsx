/* eslint-disable import/first */

import React from 'react';
import { shallow } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import MessengerView from 'components/MessengerView';

const clearFunc = jest.fn();

const messengerProps = {
  message: 'This is a message',
  show: true,
  clear: clearFunc,
};

describe('The Messenger notifier', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <MessengerView {...messengerProps} />,
      { context: { muiTheme: getMuiTheme() } },
    );
  });

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('has a show status of true', () => {
    expect(wrapper.find('Snackbar').props()).toHaveProperty('open', true);
  });
  it('has the correct message', () => {
    expect(wrapper.find('Snackbar').props()).toHaveProperty('message', messengerProps.message);
  });
  it('can call a close callback', () => {
    wrapper.find('Snackbar').props().onRequestClose();
    expect(clearFunc).toHaveBeenCalled();
  });
});
