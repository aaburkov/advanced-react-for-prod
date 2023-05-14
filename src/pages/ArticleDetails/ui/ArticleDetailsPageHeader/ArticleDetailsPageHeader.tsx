import { useAppSelector } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article';
import { getAvailableEditArticleByUser } from 'pages/ArticleDetails/model/selectors/article';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cn from 'shared/lib/classNames';
import {
    AppButton, AppButtonTheme,
} from 'shared/ui';
import styles from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string
}
const ArticleDetailsPageHeader:FC<ArticleDetailsPageHeaderProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('articles');
    const isAvailableToEdit = useAppSelector(getAvailableEditArticleByUser);
    const article = useAppSelector(getArticleDetailsData);

    return (
        <div className={cn(styles.ArticleDetailsPageHeader, className)}>
            <Link to={RoutePath.articles}>
                <AppButton theme={AppButtonTheme.OUTLINE}>
                    {t('To articles')}
                </AppButton>
            </Link>
            {
                isAvailableToEdit && (
                    <Link to={`${RoutePath.articles_detail}/${article?.id}/edit`}>
                        <AppButton theme={AppButtonTheme.OUTLINE}>
                            {t('Edit article')}
                        </AppButton>
                    </Link>
                )
            }
        </div>
    );
};

export default ArticleDetailsPageHeader;
