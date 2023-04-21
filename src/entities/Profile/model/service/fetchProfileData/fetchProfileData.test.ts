import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

describe('fetchProfileData test', () => {
    test('success', async () => {
        const response = {
            name: 'aaa',
            surname: 'bbb',
            username: 'ccc',
            age: 22,
        };

        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: response }));

        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toEqual('fulfilled');
        expect(result.payload).toEqual(response);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toEqual('rejected');
    });
});
