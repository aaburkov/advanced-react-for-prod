import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import { CounterSchema } from '../../types/counterSchema';

export const getCounterValues = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);
