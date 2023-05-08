import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageHasMore, getArticlesPageIsLoading,
} from '../selectors/articlesPage';
import { fetchArticles } from './fetchArticles';

export const fetchMoreArticles = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchMoreArticles',
    async (_, thunkApi) => {
        const {
            getState, dispatch,
        } = thunkApi;

        const state = getState();
        const hasMore = getArticlesPageHasMore(state);
        const isLoading = getArticlesPageIsLoading(state);

        if (hasMore && !isLoading) {
            dispatch(fetchArticles());
        }
    },
);
