import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { fetchArticleById } from '../services/fetchArticleById';
import { Article } from '../types/article';

const initialState:ArticleDetailsSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {
        // setReadonly: (state, action: PayloadAction<boolean>) => {
        //     state.readonly = action.payload;
        // },
    },
    extraReducers: (builder) => builder
        .addCase(fetchArticleById.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        })
        .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
            state.isLoading = false;
            state.data = action.payload;
            state.error = undefined;
        })
        .addCase(fetchArticleById.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }),
});

// Action creators are generated for each case reducer function
export const {
    actions: articleDetailsActions,
    reducer: articleDetailsReducer,
} = articleDetailsSlice;
