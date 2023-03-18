import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProfile, ProfileSchema } from '../types/profile';
import { fetchProfileData } from '../service/fetchProfileData/fetchProfileData';

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
    extraReducers: (builder) => builder
        .addCase(fetchProfileData.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(fetchProfileData.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }),
});

// Action creators are generated for each case reducer function
export const { actions: profileActions, reducer: profileReducer } = profileSlice;
