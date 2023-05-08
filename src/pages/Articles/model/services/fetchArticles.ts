import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import i18n from 'shared/config/i18n/i18n';
import { getArticlesPageLimit, getArticlesPageNumber } from '../selectors/articlesPage';

export const fetchArticles = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articlesPage/fetchArticles',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;

        const state = getState();
        const limit = getArticlesPageLimit(state);
        const page = getArticlesPageNumber(state);

        try {
            const res = await extra.$api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page + 1,
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
