import _ from 'lodash';

import * as constants from 'actions/constants';

const allVals = Object.keys(constants).map(key => constants[key]);

it('does not duplicate any constants', () => {
  expect(allVals).toEqual(_.uniq(allVals));
});
