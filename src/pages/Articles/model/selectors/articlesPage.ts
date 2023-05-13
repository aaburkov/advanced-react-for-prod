import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortField, ArticleViewType } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { LIMIT_FOR_GRID, LIMIT_FOR_LIST } from '../slice/ArticlesPageSlice';

export const getArticlesPageInited = (state: StateSchema) => state.articlesPage?._inited;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageNumber = (state: StateSchema) => state.articlesPage?.pageNumber ?? 0;
export const getArticlesPageLimit = (state: StateSchema) => (
    state.articlesPage?.viewType === ArticleViewType.GRID ? LIMIT_FOR_GRID : LIMIT_FOR_LIST
);
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const getArticlesPageIsLoading = (
    state: StateSchema,
) => state.articlesPage?.isLoading || false;
export const getArticlesPageViewType = (state: StateSchema) => state.articlesPage?.viewType;
export const getArticlesPageSort = (
    state: StateSchema,
) => state.articlesPage?.sort ?? ArticleSortField.CREATED;
export const getArticlesPageOrder = (
    state: StateSchema,
) => state.articlesPage?.order ?? SortOrder.ASC;
export const getArticlesPageSearch = (state: StateSchema) => state.articlesPage?.search ?? '';
export const getArticlesPageTagsList = (state: StateSchema) => state.articlesPage?.tagsList ?? [];
