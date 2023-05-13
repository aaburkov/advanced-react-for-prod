import { ReducersList, useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { ArticleDetails, ArticleList, ArticleViewType } from 'entities/Article';
import { CommentsList } from 'entities/Comment';
import { CommentForm } from 'features/CommentForm';
import {
    sendCommentForArticle,
} from 'features/CommentForm/model/services/sendCommentForArticle/sendCommentForArticle';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import DynamicModuleLoader from 'shared/components/DynamicModuleLoader';
import cn from 'shared/lib/classNames';
import { Text, TextTheme } from 'shared/ui';
import { PageContainer } from 'widgets/PageContainer';
import { getArticleCommentsIsLoading } from '../model/selectors/comments';
import {
    getArticleDetailsRecommendationsIsLoading,
} from '../model/selectors/recommendations';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import { fetchArticleRecommendations } from '../model/services/fetchRecommendations';
import { articleDetailsPageReducer } from '../model/slice';
import {
    getArticleComments,
} from '../model/slice/ArticleDetailCommentsSlice';
import {
    getArticleRecommendations,
} from '../model/slice/ArticleDetailRecommendationsSlice';
import styles from './ArticlesDetailsPage.module.scss';

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
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
    // const error = useAppSelector(getArticleCommentsError);

    const recommendations = useAppSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useAppSelector(getArticleDetailsRecommendationsIsLoading);
    // const recommendationsError = useAppSelector(getArticleDetailsRecommendationsError);

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    }, [dispatch, id]);

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
            <PageContainer className={cn(styles.ArticleDetailsPage, className)}>
                <h1>{t('Article')}</h1>
                <ArticleDetails id={id} />
                <Text title={t('Recommendations')} className={styles.commentsHeader} />
                <ArticleList
                    isLoading={recommendationsIsLoading}
                    articles={recommendations}
                    viewType={ArticleViewType.GRID}
                    linkTarget="_blank"
                    className={styles.recommendationsList}
                />
                <Text title={t('Comments header')} className={styles.commentsHeader} />
                <CommentForm onSendComment={onSendCommentHandler} />
                <CommentsList comments={comments} isLoading={isLoading} />
            </PageContainer>
        </DynamicModuleLoader>
    );
};

export default ArticleDetailsPage;
