import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Main:FC = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('Main page title')}</h1>
            <Counter />
            <BugButton />
        </div>
    );
};

export default Main;
