import cn from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

const Navbar:FC<NavbarProps> = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={cn(styles.Navbar, className)}>
            <div className={styles.links} />
        </div>
    );
};

export default Navbar;
