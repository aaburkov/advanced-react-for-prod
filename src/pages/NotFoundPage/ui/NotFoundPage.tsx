import { FC, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?:string;
}

const NotFoundPage:FC<PropsWithChildren<NotFoundPageProps>> = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.NotFoundPage}>{t('Page not found')}</div>
    );
};

export default NotFoundPage;
