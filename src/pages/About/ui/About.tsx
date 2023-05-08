import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { PageContainer } from 'shared/ui';

const About:FC = () => {
    const { t } = useTranslation();
    return (
        <PageContainer>
            <h1>{t('About page title')}</h1>
        </PageContainer>
    );
};

export default About;
