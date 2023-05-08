import {
    FC, memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'shared/lib/classNames';
import {
    AppButton,
    AppButtonTheme,
    Avatar,
    Card, Icon, Text, TextSize,
} from 'shared/ui';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Link, useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import {
    Article, ArticleBlockTypes, ArticleTextBlock, ArticleViewType,
} from '../../model/types/article';
import styles from './ArticleListItem.module.scss';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
   className?: string,
   article: Article,
   viewType: ArticleViewType
}

const ArticleListItem:FC<ArticleListItemProps> = (props) => {
    const { className, article, viewType } = props;

    const { t } = useTranslation('articles');
    const navigate = useNavigate();
    const onNavigateToArticle = useCallback(() => {
        navigate(`${RoutePath.articles}/${article.id}`);
    }, [article.id, navigate]);

    if (viewType === ArticleViewType.GRID) {
        return (
            <Link
                to={`${RoutePath.articles_detail}/${article.id}`}
                className={cn(styles[viewType], className)}
            >
                <Card>
                    <div className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img src={article.img} className={styles.img} alt={article.title} />
                            <Text
                                text={article.createdAt}
                                className={styles.createdAt}
                                size={TextSize.S}
                            />
                        </div>
                        <div className={styles.infoWrapper}>
                            <Text
                                text={article.tags.join(',')}
                                className={styles.tags}
                                size={TextSize.S}
                            />
                            <Text
                                text={String(article.views)}
                                className={styles.views}
                                size={TextSize.S}
                            />
                            <Icon Svg={EyeIcon} className={styles.eyeIcon} />
                        </div>
                        <Text text={article.title} className={styles.title} />
                    </div>
                </Card>
            </Link>
        );
    }

    const textBlock = article.blocks.find(
        (block) => block.type === ArticleBlockTypes.TEXT,
    ) as ArticleTextBlock;

    return (
        <Card className={cn(styles[viewType], className)}>
            <div className={styles.header}>
                <Avatar size={30} src={article.user.avatar} className={styles.avatar} />
                <Text text={article.user.username} className={styles.username} />
                <Text
                    text={article.createdAt}
                    className={styles.createdAt}
                    size={TextSize.S}
                />
            </div>
            <Text text={article.title} className={styles.title} />
            <Text
                text={article.tags.join(',')}
                className={styles.tags}
                size={TextSize.S}
            />
            <img src={article.img} className={styles.img} alt={article.title} />
            {
                textBlock && (
                    <ArticleTextBlockComponent
                        block={textBlock}
                        className={styles.contentPreview}
                    />
                )
            }
            <div className={styles.footer}>
                <AppButton onClick={onNavigateToArticle} theme={AppButtonTheme.OUTLINE}>
                    {t('Read full')}
                </AppButton>
                <div className={styles.infoWrapper}>
                    <Text
                        text={String(article.views)}
                        className={styles.views}
                        size={TextSize.S}
                    />
                    <Icon Svg={EyeIcon} className={styles.eyeIcon} />
                </div>
            </div>
        </Card>
    );
};

export default memo(ArticleListItem);
