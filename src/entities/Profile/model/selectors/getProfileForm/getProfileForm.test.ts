import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
    it('getProfileForm', () => {
        const state:DeepPartial<StateSchema> = {
            profile: {
                form: {
                    name: 'aaa',
                    surname: 'bbb',
                    username: 'ccc',
                    age: 22,
                },
            },
        };

        expect(getProfileForm(state as StateSchema)).toEqual({
            name: 'aaa',
            surname: 'bbb',
            username: 'ccc',
            age: 22,
        });
    });
});
