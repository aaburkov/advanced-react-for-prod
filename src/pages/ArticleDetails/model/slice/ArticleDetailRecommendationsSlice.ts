import {
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { fetchArticleRecommendations } from '../services/fetchRecommendations';
import { ArticleDetailsRecommendationsSchema } from '../types/articleDetailsRecommendationsSchema';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (comment) => comment.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations
        || recommendationsAdapter.getInitialState(),
);
const articleDetailRecommendationsSlice = createSlice({
    name: 'articleDetailRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
        error: undefined,
        isLoading: false,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => builder
        .addCase(fetchArticleRecommendations.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        })
        .addCase(fetchArticleRecommendations.fulfilled, (
            state,
            action,
        ) => {
            state.isLoading = false;
            recommendationsAdapter.setAll(state, action.payload);
            state.error = undefined;
        })
        .addCase(fetchArticleRecommendations.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }),
});

export const {
    reducer: articleDetailRecommendationsReducer,
    actions: articleDetailRecommendationsActions,
} = articleDetailRecommendationsSlice;

//   type RootState = ReturnType<typeof store.getState>

//   console.log(store.getState().books)
//   // { ids: [], entities: {} }

//   // Can create a set of memoized selectors based on the location of this entity state
//   const booksSelectors = booksAdapter.getSelectors<RootState>(
//     (state) => state.books
//   )

//   // And then use the selectors to retrieve values
//   const allBooks = booksSelectors.selectAll(store.getState())
