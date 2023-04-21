import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
    it('getProfileIsLoading', () => {
        const state:DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };

        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });
});
