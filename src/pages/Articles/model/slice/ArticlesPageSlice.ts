import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleSortField, ArticleViewType } from 'entities/Article';
import { ARTICLES_VIEW_TYPE_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { SortOrder } from 'shared/types';
import { ArticleTags } from 'entities/Article/model/types/article';
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
        // filters
        sort: ArticleSortField.CREATED,
        search: '',
        order: SortOrder.ASC,
        tagsList: [],
        //
        _inited: false,
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
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
            state.pageNumber = 0;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
            state.pageNumber = 0;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
            state.pageNumber = 0;
        },
        setTagsList: (state, action: PayloadAction<ArticleTags[]>) => {
            state.tagsList = action.payload;
            state.pageNumber = 0;
        },
    },
    extraReducers: (builder) => builder
        .addCase(fetchArticles.pending, (state, action) => {
            state.isLoading = true;
            state.error = undefined;
            if (action.meta.arg?.replace) {
                articlesListAdapter.removeAll(state);
            }
        })
        .addCase(fetchArticles.fulfilled, (state, action) => {
            state.isLoading = false;
            if (action.meta.arg?.replace) {
                articlesListAdapter.setAll(state, action.payload);
            } else {
                articlesListAdapter.addMany(state, action.payload);
            }
            state.error = undefined;
            state.pageNumber += 1;
            state.hasMore = Boolean(action.payload.length);
            if (!state._inited) {
                state._inited = true;
            }
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
