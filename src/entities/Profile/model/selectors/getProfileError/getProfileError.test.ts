import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
    it('getProfileError', () => {
        const state:DeepPartial<StateSchema> = {
            profile: {
                error: 'some error',
            },
        };

        expect(getProfileError(state as StateSchema)).toEqual('some error');
    });
});
