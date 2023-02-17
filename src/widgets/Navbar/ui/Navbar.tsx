import cn from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();

    return (
        <div className={cn(styles.navbar, className)}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={styles.item}>{t('Main page title')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/about" className={styles.item}>{t('About page title')}</AppLink>
            </div>
        </div>
    );
}
