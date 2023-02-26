import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getCounterValues } from './getCounterValue';

describe('getCounterValue', () => {
    test('should return counter value', () => {
        const state:DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };

        expect(getCounterValues(state as StateSchema)).toBe(10);
    });
});
