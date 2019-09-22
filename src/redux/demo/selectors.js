import { createSelector } from 'reselect';

const demoSelector = state => state.demo.value;

export const getDemoSelector = createSelector(
    demoSelector,
    (value) => value
);