import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleViewType } from 'entities/Article';
import { ARTICLES_VIEW_TYPE_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { ArticlesPageSchema } from '../types/ArticlesPageSchema';
import { fetchArticles } from '../services/fetchArticles';

export const LIMIT_FOR_GRID = 9;
export const LIMIT_FOR_LIST = 4;

const initialViewType = localStorage.getItem(ARTICLES_VIEW_TYPE_LOCALSTORAGE_KEY) as ArticleViewType
    || ArticleViewType.GRID;

const articlesListAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticlesList = articlesListAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesListAdapter.getInitialState(),
);

export const articlesPageSlice = createSlice({
    name: 'articlesPage',
    initialState: articlesListAdapter.getInitialState<ArticlesPageSchema>({
        error: undefined,
        isLoading: false,
        ids: [],
        entities: {},
        pageNumber: 0,
        hasMore: true,
        viewType: initialViewType,
    }),
    reducers: {
        setViewType: (state, action: PayloadAction<ArticleViewType>) => {
            state.viewType = action.payload;
            localStorage.setItem(ARTICLES_VIEW_TYPE_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.pageNumber = action.payload;
        },
        setHasMore: (state, action: PayloadAction<boolean>) => {
            state.hasMore = action.payload;
        },
    },
    extraReducers: (builder) => builder
        .addCase(fetchArticles.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        })
        .addCase(fetchArticles.fulfilled, (state, action: PayloadAction<Article[]>) => {
            state.isLoading = false;
            articlesListAdapter.setMany(state, action.payload);
            state.error = undefined;
            state.pageNumber += 1;
            state.hasMore = Boolean(action.payload.length);
        })
        .addCase(fetchArticles.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }),
});

// Action creators are generated for each case reducer function
export const {
    actions: articlesPageActions,
    reducer: articlesPageReducer,
} = articlesPageSlice;
