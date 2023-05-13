import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleSortField } from 'entities/Article';
import { ArticleTags } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';
import {
    getArticlesPageInited,
} from '../selectors/articlesPage';
import { articlesPageActions } from '../slice/ArticlesPageSlice';
import { fetchArticles } from './fetchArticles';

export const initArticles = createAsyncThunk<
    void, URLSearchParams, ThunkConfig<string>
>(
    'articlesPage/initArticles',
    async (searchParams, thunkApi) => {
        const { dispatch, getState } = thunkApi;

        const state = getState();
        const inited = getArticlesPageInited(state);

        if (!inited) {
            dispatch(articlesPageActions.setOrder(
                searchParams.get('order') as SortOrder || SortOrder.ASC,
            ));
            dispatch(articlesPageActions.setSort(
                searchParams.get('sort') as ArticleSortField || ArticleSortField.CREATED,
            ));
            dispatch(articlesPageActions.setSearch(searchParams.get('search') ?? ''));
            dispatch(articlesPageActions.setTagsList(
                searchParams.get('tags')?.split(',') as ArticleTags[] || [],
            ));

            dispatch(fetchArticles());
        }
    },
);
