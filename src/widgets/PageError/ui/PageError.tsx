import cn from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton, AppButtonTheme } from 'shared/ui';
import { FC } from 'react';
import styles from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}
const PageError: FC<PageErrorProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={cn(styles.PageError, className)}>
            <p>{t('Something went wrong')}</p>
            <AppButton onClick={reloadPage}>
                {t('Reload page')}
            </AppButton>
        </div>
    );
};

export default PageError;
