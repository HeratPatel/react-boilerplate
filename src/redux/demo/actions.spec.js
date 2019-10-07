import types from './type';
import * as actions from './actions';

describe('demo actions', () => {
  it('demoAction', () => {
    const value = 'Test';

    const expectedAction = {
      type: types.DEMO_INIT,
      value,
    };

    expect(actions.demoAction(value)).toEqual(expectedAction);
  });
});
