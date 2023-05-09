import {
    PayloadAction,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { IComment } from 'entities/Comment';
import { ArticleDetailsCommentsSchema } from '../types/articleDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<IComment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
);
const articleDetailCommentsSlice = createSlice({
    name: 'articleDetailCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        error: undefined,
        isLoading: false,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => builder
        .addCase(fetchCommentsByArticleId.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        })
        .addCase(fetchCommentsByArticleId.fulfilled, (
            state,
            action: PayloadAction<IComment[]>,
        ) => {
            state.isLoading = false;
            commentsAdapter.setAll(state, action.payload);
            state.error = undefined;
        })
        .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }),
});

export const {
    reducer: articleDetailCommentsReducer,
    actions: articleDetailCommentsActions,
} = articleDetailCommentsSlice;

//   type RootState = ReturnType<typeof store.getState>

//   console.log(store.getState().books)
//   // { ids: [], entities: {} }

//   // Can create a set of memoized selectors based on the location of this entity state
//   const booksSelectors = booksAdapter.getSelectors<RootState>(
//     (state) => state.books
//   )

//   // And then use the selectors to retrieve values
//   const allBooks = booksSelectors.selectAll(store.getState())
