import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'components/Counter';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Main:FC = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t('Main page title')}</h1>
            <BugButton />
            <Counter />
        </div>
    );
};

export default Main;
