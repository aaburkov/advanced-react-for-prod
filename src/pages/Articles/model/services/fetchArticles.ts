import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import i18n from 'shared/config/i18n/i18n';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
    getArticlesPageLimit,
    getArticlesPageNumber,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageTagsList,
} from '../selectors/articlesPage';

interface fetchArticlesProps {
    replace?: boolean
}
export const fetchArticles = createAsyncThunk<
    Article[], fetchArticlesProps | undefined, ThunkConfig<string>
>(
    'articlesPage/fetchArticles',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;

        const state = getState();
        const limit = getArticlesPageLimit(state);
        const page = getArticlesPageNumber(state);
        const order = getArticlesPageOrder(state);
        const sort = getArticlesPageSort(state);
        const search = getArticlesPageSearch(state);
        const tagsList = getArticlesPageTagsList(state);

        try {
            addQueryParams({
                order,
                sort,
                search,
                tags: tagsList.join(','),
            });
            const res = await extra.$api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page + 1,
                    _order: order,
                    _sort: sort,
                    tags_like: tagsList.join(','),
                    q: search,

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
