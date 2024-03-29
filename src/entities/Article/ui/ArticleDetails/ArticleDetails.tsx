import { ReducersList, useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import {
    FC, memo, useCallback, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import EyeIcon from 'shared/assets/icons/eye.svg';
import DynamicModuleLoader from 'shared/components/DynamicModuleLoader';
import cn from 'shared/lib/classNames';
import {
    Avatar, Icon, Skeleton, Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/ArticleDetailSlice';
import { ArticleBlock, ArticleBlockTypes } from '../../model/types/article';
import ArticleCodeBlockComponent from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import ArticleImageBlockComponent from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import styles from './ArticleDetails.module.scss';

const initialReducers: ReducersList = {
    articlesDetails: articleDetailsReducer,
};
interface ArticleDetailsProps {
   className?: string,
   id: string
}

const ArticleDetails:FC<ArticleDetailsProps> = (props) => {
    const { className, id } = props;

    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();

    const isLoading = useAppSelector(getArticleDetailsIsLoading);
    const error = useAppSelector(getArticleDetailsError);
    const article = useAppSelector(getArticleDetailsData);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockTypes.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    block={block}
                    className={styles.block}
                />
            );
        case ArticleBlockTypes.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    block={block}
                    className={styles.block}
                />
            );
        case ArticleBlockTypes.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    block={block}
                    className={styles.block}
                />
            );
        default:
            return null;
        }
    }, []);
    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton
                    width={200}
                    height={200}
                    borderRadius="50%"
                    className={styles.avatar}
                />
                <Skeleton width={300} height={32} />
                <Skeleton width={600} height={24} />
                <Skeleton width="100%" height={200} />
                <Skeleton width="100%" height={200} />
                <Skeleton width="100%" height={200} />
                <Skeleton width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('Error')}
                text={t('Article not found')}
                theme={TextTheme.ERROR}
            />
        );
    } else {
        content = (
            <>
                <Avatar size={200} src={article?.img} className={styles.avatar} />
                <Text title={article?.title} text={article?.subtitle} size={TextSize.L} />
                <div className={styles.articleInfo}>
                    <Icon Svg={EyeIcon} className={styles.icon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={styles.articleInfo}>
                    <Icon Svg={CalendarIcon} className={styles.icon} />
                    <Text text={article?.createdAt} />
                </div>

                {
                    article?.blocks.map(renderBlock)
                }
            </>
        );
    }
    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={cn(styles.ArticleDetails, className)}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetails);
