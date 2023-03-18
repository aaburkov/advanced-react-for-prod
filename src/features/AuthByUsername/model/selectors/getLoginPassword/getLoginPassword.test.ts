import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './index';

describe('getLoginPassword', () => {
    test('should return getLoginPassword value', () => {
        const password = '123';
        const state:DeepPartial<StateSchema> = {
            loginForm: {
                password,
            },
        };

        expect(getLoginPassword(state as StateSchema)).toEqual(password);
    });

    test('should return default value', () => {
        const state:DeepPartial<StateSchema> = {};

        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
