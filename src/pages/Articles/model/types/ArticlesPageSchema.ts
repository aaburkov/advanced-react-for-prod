import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleViewType } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article>{
    isLoading: boolean;
    error?: string;
    viewType: ArticleViewType

    // pagination
    pageNumber: number
    hasMore: boolean

    _inited: boolean
}
