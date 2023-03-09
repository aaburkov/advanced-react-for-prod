import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface loginByUserNameProps {
    username: string
    password: string
}

export const loginByUserName = createAsyncThunk<User, loginByUserNameProps, {rejectValue: string}>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        try {
            const res = await axios.post<User>('http://localhost:8888/login', authData);

            if (!res.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data));
            thunkApi.dispatch(userActions.setAuthData(res.data));
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue(i18n.t('Wrong username or password'));
        }
    },
);
