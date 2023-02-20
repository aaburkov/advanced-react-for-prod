import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'components/Counter';
import { useTranslation } from 'react-i18next';

export default function Main() {
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t('Main page title')}</h1>
            <BugButton />
            <Counter />
        </div>
    );
}
