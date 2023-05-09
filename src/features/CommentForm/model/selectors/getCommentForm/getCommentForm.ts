import type { StateSchema } from 'app/providers/StoreProvider';

export const getCommentFormText = (state: StateSchema) => state.commentForm?.text ?? '';
export const getCommentFormIsLoading = (state: StateSchema) => state.commentForm?.isLoading;
export const getCommentFormErro = (state: StateSchema) => state.commentForm?.error;
