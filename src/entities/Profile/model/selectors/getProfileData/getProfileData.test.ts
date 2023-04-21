import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
    it('getProfileData', () => {
        const state:DeepPartial<StateSchema> = {
            profile: {
                data: {
                    name: 'aaa',
                    surname: 'bbb',
                    username: 'ccc',
                    age: 22,
                },
            },
        };

        expect(getProfileData(state as StateSchema)).toEqual({
            name: 'aaa',
            surname: 'bbb',
            username: 'ccc',
            age: 22,
        });
    });
});
