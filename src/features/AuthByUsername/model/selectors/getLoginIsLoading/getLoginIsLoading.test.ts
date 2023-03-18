import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './index';

describe('getLoginIsLoading', () => {
    test('should return getLoginIsLoading value', () => {
        const isLoading = true;
        const state:DeepPartial<StateSchema> = {
            loginForm: {
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
