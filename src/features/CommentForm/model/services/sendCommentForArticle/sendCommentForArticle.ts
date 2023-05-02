import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IComment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import {
    fetchCommentsByArticleId,
} from 'pages/ArticleDetails/model/services/fetchCommentsByArticleId';
import i18n from 'shared/config/i18n/i18n';
import { getCommentFormText } from '../../selectors/getCommentForm/getCommentForm';

interface sendCommentForArticleProps {
    text: string
    articleId: string
    userId: string
}

export const sendCommentForArticle = createAsyncThunk<
    IComment,
    string | undefined,
    ThunkConfig<string>
>(
    'commentForm/sendCommentForArticle',
    async (articleId, thunkApi) => {
        const {
            dispatch, extra, rejectWithValue, getState,
        } = thunkApi;
        const userId = getUserAuthData(getState())?.id;
        const text = getCommentFormText(getState());
        if (!userId || !text || !articleId) {
            return rejectWithValue(i18n.t('Wrong data'));
        }
        try {
            const res = await extra.$api.post<IComment>('/comments', {
                articleId,
                userId,
                text,
            });

            if (!res.data) {
                return rejectWithValue(i18n.t('Something went wrong'));
            }

            dispatch(fetchCommentsByArticleId(articleId));
            return res.data;
        } catch (error) {
            return rejectWithValue(i18n.t('Something went wrong'));
        }
    },
);
