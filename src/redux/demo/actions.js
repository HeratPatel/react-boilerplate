import types from "./type";

export const demoAction = value => ({
  type: types.DEMO_INIT,
  value
});
