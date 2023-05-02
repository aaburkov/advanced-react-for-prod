import { ArticleDetails } from 'entities/Article';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import cn from 'shared/lib/classNames';
import { Text, TextTheme } from 'shared/ui';
import { CommentsList } from 'entities/Comment';
import DynamicModuleLoader from 'shared/components/DynamicModuleLoader';
import { ReducersList, useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { CommentForm } from 'features/CommentForm';
import {
    sendCommentForArticle,
} from 'features/CommentForm/model/services/sendCommentForArticle/sendCommentForArticle';
import styles from './ArticlesDetailsPage.module.scss';
import {
    articleDetailCommentsReducer,
    getArticleComments,
} from '../model/slice/ArticleDetailCommentsSlice';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../model/selectors/comments';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';

const reducers: ReducersList = {
    articleDetailsComments: articleDetailCommentsReducer,
};
interface ArticleDetailsPageProps {
    className?: string
}
const ArticleDetailsPage:FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('articles');
    const { id } = useParams<{id: string}>();
    const dispatch = useAppDispatch();
    const comments = useAppSelector(getArticleComments.selectAll);
    const isLoading = useAppSelector(getArticleCommentsIsLoading);
    const error = useAppSelector(getArticleCommentsError);

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    }, []);

    const onSendCommentHandler = () => {
        dispatch(sendCommentForArticle(id));
    };
    if (!id) {
        return (
            <div className={cn(styles.ArticleDetailsPage, className)}>
                <Text title={t('Error')} text={t('Article not found')} theme={TextTheme.ERROR} />
            </div>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={cn(styles.ArticleDetailsPage, className)}>
                <h1>{t('Article')}</h1>
                <ArticleDetails id={id} />
                <Text title={t('Comments header')} className={styles.commentsHeader} />
                <CommentForm onSendComment={onSendCommentHandler} />
                <CommentsList comments={comments} isLoading={isLoading} />
            </div>
        </DynamicModuleLoader>
    );
};

export default ArticleDetailsPage;
