import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleViewType } from 'entities/Article';
import { LIMIT_FOR_GRID, LIMIT_FOR_LIST } from '../slice/ArticlesPageSlice';

export const getArticlesPageInited = (state: StateSchema) => state.articlesPage?._inited;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageViewType = (state: StateSchema) => state.articlesPage?.viewType;
export const getArticlesPageNumber = (state: StateSchema) => state.articlesPage?.pageNumber || 0;
export const getArticlesPageLimit = (state: StateSchema) => (
    state.articlesPage?.viewType === ArticleViewType.GRID ? LIMIT_FOR_GRID : LIMIT_FOR_LIST
);
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const getArticlesPageIsLoading = (
    state: StateSchema,
) => state.articlesPage?.isLoading || false;
