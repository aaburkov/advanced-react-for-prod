import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleSortField, ArticleViewType } from 'entities/Article';
import { ArticleTags } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';

export interface ArticlesPageSchema extends EntityState<Article>{
    isLoading: boolean;
    error?: string;
    viewType: ArticleViewType

    // pagination
    pageNumber: number
    hasMore: boolean

    // filters
    order: SortOrder
    sort: ArticleSortField
    search: string
    tagsList: ArticleTags[]
    //
    _inited: boolean
}
