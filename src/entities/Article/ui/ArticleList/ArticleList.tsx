import {
    FC, memo,
} from 'react';
import cn from 'shared/lib/classNames';
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

    const renderArticle = (article: Article) => (
        <ArticleListItem key={article.id} article={article} viewType={viewType} />
    );

    return (
        <div className={cn(styles.ArticleList, styles[viewType], className)}>
            {
                articles.length ? articles.map(renderArticle) : null
            }
            {
                isLoading && getSkeletons(viewType)
            }
        </div>
    );
};

export default memo(ArticleList);
