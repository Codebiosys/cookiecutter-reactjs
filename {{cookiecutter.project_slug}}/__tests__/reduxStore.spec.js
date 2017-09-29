import _ from 'lodash';
import createHistory from 'history/createMemoryHistory';
import createStore from 'reduxStore';
import apollo from 'apolloService';

const history = createHistory();

describe('The Redux Store', () => {
  let store;

  beforeEach(() => {
    store = createStore({ apollo, history });
  });

  it('has the correct store keys', () => {
    // console.log(apolloService.reducer());
    expect(_.keys(store.getState())).toEqual([
      'app',
      'apollo',
      'router',
    ]);
  });
});
