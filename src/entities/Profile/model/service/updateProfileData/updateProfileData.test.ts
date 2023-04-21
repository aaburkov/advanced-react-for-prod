import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { Countries } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from './updateProfileData';
import { IProfile, ValidateProfileError } from '../../types/profile';

const data:IProfile = {
    name: 'aaa',
    surname: 'bbb',
    username: 'ccc',
    age: 22,
    country: Countries.Armenia,
    city: 'Moscow',
    avatar: '',
    currency: Currency.EUR,
};
describe('updateProfileData test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toEqual('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('server error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toEqual('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.SERVER_ERROR,
        ]);
    });

    test('server error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: {
                    ...data,
                    name: '',
                },
            },
        });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toEqual('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
});
