import {
    FC, memo,
} from 'react';
import cn from 'shared/lib/classNames';
import { Text, TextAlign, TextSize } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import {
    Article, ArticleViewType,
} from '../../model/types/article';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton';
import styles from './ArticleList.module.scss';

interface ArticleListProps {
   className?: string,
   articles: Article[],
   isLoading: boolean,
   viewType?: ArticleViewType
}
const getSkeletons = (viewType: ArticleViewType) => new Array(
    viewType === ArticleViewType.GRID ? 9 : 3,
).fill(0)
    // eslint-disable-next-line react/no-array-index-key
    .map((_, index) => <ArticleListItemSkeleton key={index} viewType={viewType} />);

const ArticleList:FC<ArticleListProps> = (props) => {
    const {
        className,
        articles,
        isLoading,
        viewType = ArticleViewType.LIST,
    } = props;
    const { t } = useTranslation('articles');

    const renderArticle = (article: Article) => (
        <ArticleListItem key={article.id} article={article} viewType={viewType} />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={cn(styles.ArticleList, className)}>
                <Text size={TextSize.L} title={t('Articles not found')} />
            </div>
        );
    }

    return (
        <div className={cn(styles.ArticleList, styles[viewType], className)}>
            {
                articles.map(renderArticle)
            }
            {
                isLoading && getSkeletons(viewType)
            }
        </div>
    );
};

export default memo(ArticleList);
