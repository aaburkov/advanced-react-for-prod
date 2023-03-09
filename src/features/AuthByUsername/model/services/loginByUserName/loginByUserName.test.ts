import { StateSchema } from 'app/providers/StoreProvider';
import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { loginByUserName } from './loginByUserName';

jest.mock('axios');

const mockedAxios = jest.mocked(axios);

describe('LoginByUserName test', () => {
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;

    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });

    // test('success auth', async () => {
    //     const response = {
    //         username: 'user',
    //         id: '1',
    //     };
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: response }));

    //     const action = loginByUserName({
    //         username: '123',
    //         password: '123',
    //     });

    //     const result = await action(dispatch, getState, undefined);

    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(response));
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toEqual('fulfilled');
    //     expect(result.payload).toEqual(response);
    // });

    // test('error auth', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    //     const action = loginByUserName({
    //         username: '123',
    //         password: '123',
    //     });

    //     const result = await action(dispatch, getState, undefined);

    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toEqual('rejected');
    //     expect(result.payload).toEqual('error');
    // });

    test('success auth', async () => {
        const response = {
            username: 'user',
            id: '1',
        };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: response }));

        const thunk = new TestAsyncThunk(loginByUserName);
        const result = await thunk.callThunk({
            username: '123',
            password: '123',
        });

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(response));
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toEqual('fulfilled');
        expect(result.payload).toEqual(response);
    });

    test('error auth', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const thunk = new TestAsyncThunk(loginByUserName);
        const result = await thunk.callThunk({
            username: '123',
            password: '123',
        });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toEqual('rejected');
        expect(result.payload).toEqual('Wrong username or password');
    });
});
