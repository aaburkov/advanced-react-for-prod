import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailRecommendationsReducer } from './ArticleDetailRecommendationsSlice';
import { articleDetailCommentsReducer } from './ArticleDetailCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations: articleDetailRecommendationsReducer,
    comments: articleDetailCommentsReducer,
});
