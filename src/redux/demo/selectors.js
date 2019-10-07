import { createSelector } from 'reselect';

const demoSelector = state => state.demo.value;

/**
 * getDemoSelector
 * @returns {Function}
 */
const getDemoSelector = createSelector(
  demoSelector,
  value => value,
);

export default getDemoSelector;
