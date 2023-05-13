import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import i18n from 'shared/config/i18n/i18n';

export const fetchArticleRecommendations = createAsyncThunk<
    Article[], void, ThunkConfig<string>
>(
    'articlesPage/fetchArticleRecommendations',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            const res = await extra.$api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: 4,

                },
            });

            if (!res.data) {
                throw new Error();
            }
            return res.data;
        } catch (error) {
            return rejectWithValue(i18n.t('Cant load article data'));
        }
    },
);
