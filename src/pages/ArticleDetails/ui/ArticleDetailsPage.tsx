import { ArticleDetails } from 'entities/Article';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import cn from 'shared/lib/classNames';
import { Text, TextTheme } from 'shared/ui';
import styles from './ArticlesDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string
}
const ArticleDetailsPage:FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('articles');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div className={cn(styles.ArticleDetailsPage, className)}>
                <Text title={t('Error')} text={t('Article not found')} theme={TextTheme.ERROR} />
            </div>
        );
    }
    return (
        <div className={cn(styles.ArticleDetailsPage, className)}>
            <h1>{t('Article')}</h1>
            <ArticleDetails id={id} />
        </div>
    );
};

export default ArticleDetailsPage;
