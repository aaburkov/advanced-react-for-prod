import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginError } from './index';

describe('getLoginError', () => {
    test('should return getLoginError value', () => {
        const error = 'some error mesage';
        const username = 'user';
        const password = '123';
        const isLoading = false;
        const state:DeepPartial<StateSchema> = {
            loginForm: {
                error,
                username,
                password,
                isLoading,
            },
        };

        expect(getLoginError(state as StateSchema)).toEqual(error);
    });

    test('should return default value', () => {
        const state:DeepPartial<StateSchema> = {};

        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
