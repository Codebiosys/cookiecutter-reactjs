/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import faker from 'faker';

import messages from 'reducers/messages';

import {
  DISPLAY_MESSAGE,
  CLEAR_MESSAGE,
} from 'actions/constants';

const SOME_OTHER_ACTION = 'SOME_OTHER_ACTION';

describe('message reducer', () => {
  const initialState = { display: false };
  const unrelatedAction = {
    type: SOME_OTHER_ACTION,
  };

  it('returns the existing state', () => {
    const state = messages(initialState, unrelatedAction);
    expect(state).toMatchObject(initialState);
  });

  it('adds the displayable message', () => {
    const message = {
      type: DISPLAY_MESSAGE,
      message: faker.lorem.sentence(),
    };
    const state = messages(initialState, message);
    expect(state).toHaveProperty('message', message.message);
    expect(state).toHaveProperty('display', true);
  });

  it('removes displayable message', () => {
    const activeState = {
      message: faker.lorem.sentence(),
      display: true,
    };
    const message = {
      type: CLEAR_MESSAGE,
    };
    const state = messages(activeState, message);
    expect(state).toHaveProperty('message', undefined);
    expect(state).toHaveProperty('display', false);
  });
});
