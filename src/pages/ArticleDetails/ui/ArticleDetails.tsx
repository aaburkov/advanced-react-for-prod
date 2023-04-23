import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const ArticleDetails:FC = () => {
    const { t } = useTranslation('articles');

    return (
        <div>
            <h1>{t('Article')}</h1>
        </div>
    );
};

export default ArticleDetails;
