import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProfile, ProfileSchema } from '../types/profile';

const initialState:ProfileSchema = {
    data: undefined,
    readonly: true,
    isLoading: false,
    error: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<IProfile>) => {
            state.data = action.payload;
        },
        setIsloading: (state, action: PayloadAction<IProfile>) => {
            state.data = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: profileActions, reducer: profileReducer } = profileSlice;
