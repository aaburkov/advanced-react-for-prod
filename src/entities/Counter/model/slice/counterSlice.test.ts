import { CounterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice', () => {
    test('should work with empty state', () => {
        const state = undefined;

        expect(
            counterReducer(state, counterActions.increment()),
        ).toEqual({ value: 1 });
    });
    test('increment', () => {
        const state:CounterSchema = {
            value: 10,
        };

        expect(
            counterReducer(state, counterActions.increment()),
        ).toEqual({ value: 11 });
    });

    test('decrement', () => {
        const state:CounterSchema = {
            value: 10,
        };

        expect(
            counterReducer(state, counterActions.decrement()),
        ).toEqual({ value: 9 });
    });

    test('incrementByAmount', () => {
        const state:CounterSchema = {
            value: 10,
        };

        expect(
            counterReducer(state, counterActions.incrementByAmount(5)),
        ).toEqual({ value: 15 });
    });
});
