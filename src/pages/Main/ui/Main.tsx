import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { PageContainer } from 'widgets/PageContainer';

const Main:FC = () => {
    const { t } = useTranslation();

    return (
        <PageContainer>
            <h1>{t('Main page title')}</h1>
            <Counter />
            <BugButton />
        </PageContainer>
    );
};

export default Main;
