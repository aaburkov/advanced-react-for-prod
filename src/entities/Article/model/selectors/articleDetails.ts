import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetaildData = (state: StateSchema) => state.articlesDetails?.data;
export const getArticleDetaildError = (state: StateSchema) => state.articlesDetails?.error;
export const getArticleDetaildIsLoading = (
    state: StateSchema,
) => state.articlesDetails?.isLoading || false;
