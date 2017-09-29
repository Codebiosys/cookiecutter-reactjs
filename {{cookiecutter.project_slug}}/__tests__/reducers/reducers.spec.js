/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';

import reducer from 'reducers';

describe('filter property reducer', () => {
  const initialState = {
    reports: {
      filter: {
        labels: {},
        values: {
          first: 30,
        },
      },
      newReport: {
        labels: {},
        values: {
          name: '',
          physicianUUID: '',
          siteUUID: '',
          testTypeUUID: '',
          status: 'In Progress',
        },
      },
    },
  };
  const unrelatedAction = {
    type: 'SOME_OTHER_ACTION',
  };

  it('returns the existing state', () => {
    const state = reducer(initialState, unrelatedAction);
    expect(state).toMatchObject(initialState);
  });
});
