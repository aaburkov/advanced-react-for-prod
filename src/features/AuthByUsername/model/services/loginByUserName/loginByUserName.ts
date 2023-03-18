import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface loginByUserNameProps {
    username: string
    password: string
}

export const loginByUserName = createAsyncThunk<User, loginByUserNameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        const { dispatch, extra, rejectWithValue } = thunkApi;
        try {
            const res = await extra.$api.post<User>('/login', authData);

            if (!res.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data));
            dispatch(userActions.setAuthData(res.data));
            return res.data;
        } catch (error) {
            return rejectWithValue(i18n.t('Wrong username or password'));
        }
    },
);
