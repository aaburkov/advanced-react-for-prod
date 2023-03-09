import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginPassword } from './index';

describe('getLoginPassword', () => {
    test('should return getLoginPassword value', () => {
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

        expect(getLoginPassword(state as StateSchema)).toEqual(password);
    });

    test('should return default value', () => {
        const state:DeepPartial<StateSchema> = {};

        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
