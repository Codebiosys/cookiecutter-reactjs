/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';

import {
  DISPLAY_MESSAGE,
  CLEAR_MESSAGE,
} from 'actions/constants';

import {
  displayMessage,
  clearMessage,
} from 'actions';

describe('displayMessage', () => {
  const message = 'I am a message';

  const filter = displayMessage(message);

  it('has the correct type', () => {
    expect(filter.type).toEqual(DISPLAY_MESSAGE);
  });
  it(' has the correct field', () => {
    expect(filter.message).toEqual(message);
  });
});

describe('clearMessage', () => {
  const filter = clearMessage();

  it('has the correct type', () => {
    expect(filter.type).toEqual(CLEAR_MESSAGE);
  });
});
