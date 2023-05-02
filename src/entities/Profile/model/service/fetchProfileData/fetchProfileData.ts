import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import i18n from 'shared/config/i18n/i18n';
import { IProfile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<IProfile, string, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (userId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        try {
            const res = await extra.$api.get<IProfile>(`/profile/${userId}`);

            if (!res.data) {
                throw new Error();
            }
            return res.data;
        } catch (error) {
            return rejectWithValue(i18n.t('Cant load profile data'));
        }
    },
);
