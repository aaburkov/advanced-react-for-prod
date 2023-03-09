import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginUsername } from './index';

describe('getLoginUsername', () => {
    test('should return getLoginUsername value', () => {
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

        expect(getLoginUsername(state as StateSchema)).toEqual(username);
    });

    test('should return default value', () => {
        const state:DeepPartial<StateSchema> = {};

        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
