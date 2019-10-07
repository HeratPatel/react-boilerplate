import types from './type';
import reducer from './reducer';

const intitialState = {
  value: 'hello',
};

describe('demo reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(intitialState);
  });

  it('should handle DEMO_INIT', () => {
    expect(
      reducer(intitialState, {
        type: types.DEMO_INIT,
        value: 'Test',
      }),
    ).toEqual({
      value: 'Test',
    });
  });
});
