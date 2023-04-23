import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { User, UserSchema } from '../types/userSchema';

const initialState:UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const userFromLocalStorage = localStorage.getItem(USER_LOCALSTORAGE_KEY);

            if (userFromLocalStorage) {
                state.authData = JSON.parse(userFromLocalStorage);
            }
            state._inited = true;
        },
        logout: (state) => {
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
            state.authData = undefined;
        },
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
