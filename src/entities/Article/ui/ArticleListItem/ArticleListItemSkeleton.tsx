import {
    FC, memo,
} from 'react';
import cn from 'shared/lib/classNames';
import {
    Card,
    Skeleton,
} from 'shared/ui';
import {
    ArticleViewType,
} from '../../model/types/article';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
   className?: string,
   viewType: ArticleViewType
}

const ArticleListItemSkeleton:FC<ArticleListItemSkeletonProps> = (props) => {
    const { className, viewType } = props;

    if (viewType === ArticleViewType.GRID) {
        return (
            <Card
                className={cn(styles[viewType], className)}
            >
                <div className={styles.card}>
                    <div className={styles.imageWrapper}>
                        <Skeleton width={200} height={200} className={styles.img} />
                    </div>
                    <div className={styles.infoWrapper}>
                        <Skeleton
                            className={styles.tags}
                            width="100%"
                            height={20}
                        />
                    </div>
                    <Skeleton width={170} height={25} className={styles.title} />
                </div>
            </Card>
        );
    }

    return (
        <Card className={cn(styles[viewType], className)}>
            <div className={styles.header}>
                <Skeleton width={30} height={30} borderRadius="50%" className={styles.avatar} />
                <Skeleton width={130} height={20} className={styles.username} />
                <Skeleton
                    width={80}
                    height={20}
                    className={styles.createdAt}
                />
            </div>
            <Skeleton width={250} height={24} className={styles.title} />
            <Skeleton
                className={styles.tags}
                width={150}
                height={22}
            />
            <Skeleton width="100%" height={200} className={styles.img} />

            <Skeleton
                height={250}
                className={styles.contentPreview}
            />
            <div className={styles.footer}>
                <Skeleton width={200} height={35} />
                <div className={styles.infoWrapper}>
                    <Skeleton
                        width={150}
                        height={35}
                        className={styles.views}
                    />
                </div>
            </div>
        </Card>
    );
};

export default memo(ArticleListItemSkeleton);
