import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import i18n from 'shared/config/i18n/i18n';
import { IProfile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<IProfile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            const res = await extra.$api.get<IProfile>('/profile');
            return res.data;
        } catch (error) {
            return rejectWithValue(i18n.t('Cant load profile data'));
        }
    },
);
