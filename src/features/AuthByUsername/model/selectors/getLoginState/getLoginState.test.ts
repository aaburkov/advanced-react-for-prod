import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginState } from './index';

describe('getLoginState', () => {
    test('should return getLoginState value', () => {
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

        expect(getLoginState(state as StateSchema)).toEqual({
            error,
            username,
            password,
            isLoading,
        });
    });
});
