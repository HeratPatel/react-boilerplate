import types from './type';
import action from './actions';

describe('demo actions', () => {
  it('demoAction', () => {
    const value = 'Test';

    const expectedAction = {
      type: types.DEMO_INIT,
      value,
    };

    expect(action(value)).toEqual(expectedAction);
  });
});
