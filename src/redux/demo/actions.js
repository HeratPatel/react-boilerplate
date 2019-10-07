import types from './type';

/**
 * demoAction
 * @param {string} value
 * @returns {Object}
 */
const demoAction = value => ({
  type: types.DEMO_INIT,
  value,
});

export default demoAction;
