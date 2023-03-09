import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginIsLoading } from './index';

describe('getLoginIsLoading', () => {
    test('should return getLoginIsLoading value', () => {
        const error = 'some error mesage';
        const username = 'user';
        const password = '123';
        const isLoading = true;
        const state:DeepPartial<StateSchema> = {
            loginForm: {
                error,
                username,
                password,
                isLoading,
            },
        };

        expect(getLoginIsLoading(state as StateSchema)).toEqual(isLoading);
    });

    test('should return default value', () => {
        const state:DeepPartial<StateSchema> = {};

        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
