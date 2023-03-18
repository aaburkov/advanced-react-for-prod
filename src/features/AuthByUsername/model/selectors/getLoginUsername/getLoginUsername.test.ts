import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './index';

describe('getLoginUsername', () => {
    test('should return getLoginUsername value', () => {
        const username = 'user';
        const state:DeepPartial<StateSchema> = {
            loginForm: {
                username,
            },
        };

        expect(getLoginUsername(state as StateSchema)).toEqual(username);
    });

    test('should return default value', () => {
        const state:DeepPartial<StateSchema> = {};

        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
