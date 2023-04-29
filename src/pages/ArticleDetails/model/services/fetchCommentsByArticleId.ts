import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import i18n from 'shared/config/i18n/i18n';
import { IComment } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
    IComment[],
    string | undefined,
    ThunkConfig<string>
>(
    'articleDetails/fetchCommentsByArticleId',
    async (articleId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        if (!articleId) {
            return rejectWithValue('error');
        }
        try {
            const res = await extra.$api.get<IComment[]>('/comments', {
                params: {
                    articleId,
                    _expand: 'user',
                },
            });

            if (!res.data) {
                throw new Error();
            }
            return res.data;
        } catch (error) {
            return rejectWithValue(i18n.t('Cant load article data'));
        }
    },
);
