import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Articles:FC = () => {
    const { t } = useTranslation('articles');

    return (
        <div>
            <h1>{t('Articles page')}</h1>
        </div>
    );
};

export default Articles;
