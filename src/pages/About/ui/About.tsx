import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t('About page title')}</h1>
        </div>
    );
}
