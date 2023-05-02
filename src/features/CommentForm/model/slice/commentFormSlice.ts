import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CommentFormSchema } from '../types/commentFormSchema';
import { sendCommentForArticle } from '../services/sendCommentForArticle/sendCommentForArticle';

const initialState:CommentFormSchema = {
    text: '',
    error: undefined,
    isLoading: false,
};

export const commentFormSlice = createSlice({
    name: 'commentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendCommentForArticle.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(sendCommentForArticle.fulfilled, (state) => {
                state.isLoading = false;
                state.text = '';
            })
            .addCase(sendCommentForArticle.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
                setTimeout(() => {
                    state.error = undefined;
                }, 5000);
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: commentFormActions, reducer: commentFormReducer } = commentFormSlice;
