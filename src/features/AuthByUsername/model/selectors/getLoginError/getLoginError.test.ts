import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './index';

describe('getLoginError', () => {
    test('should return getLoginError value', () => {
        const error = 'some error mesage';
        const state:DeepPartial<StateSchema> = {
            loginForm: {
                error,
            },
        };

        expect(getLoginError(state as StateSchema)).toEqual(error);
    });

    test('should return default value', () => {
        const state:DeepPartial<StateSchema> = {};

        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
