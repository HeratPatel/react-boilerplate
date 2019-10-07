import types from './type';

const intitialState = {
  value: 'hello',
};

const demo = (state = intitialState, actions) => {
  switch (actions.type) {
    case types.DEMO_INIT:
      return { ...state, value: actions.value };

    default:
      return state;
  }
};

export default demo;
