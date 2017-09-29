/* eslint-disable import/first */

import React from 'react';
import { mount } from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import _ from 'lodash';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PropTypes from 'prop-types';

import * as actions from 'actions';
import Messenger from 'containers/Messenger';
import MessengerView from 'components/MessengerView';

import { MESSAGES } from 'reducers/constants';

const message = 'I am a message';
const showMessage = true;

describe('The Messenger notifier', () => {
  let wrapper;
  let mounted;
  const defaultStore = {};
  let store;
  beforeEach(() => {
    _.set(defaultStore, `${MESSAGES}.message`, message);
    _.set(defaultStore, `${MESSAGES}.display`, showMessage);
    store = createMockStore(defaultStore);
    mounted = mount(
      <Messenger />,
      { context: { muiTheme: getMuiTheme(), store },
        childContextTypes: { muiTheme: PropTypes.object, store: PropTypes.object },
      },
    );
    wrapper = mounted.find(MessengerView);
  });

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('has a show status of true', () => {
    expect(wrapper.props()).toHaveProperty('show', showMessage);
  });
  it('has the correct message', () => {
    expect(wrapper.props()).toHaveProperty('message', message);
  });
  it('dispatches the close callback', () => {
    const closeAction = jest.spyOn(actions, 'clearMessage');
    wrapper.props().clear();
    expect(closeAction).toHaveBeenCalled();
  });
});
