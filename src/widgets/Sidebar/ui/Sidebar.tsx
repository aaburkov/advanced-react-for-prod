import { FC, useState } from 'react';
import cn from 'shared/lib/classNames';
import {
    AppButton, AppButtonTheme, AppLink, AppLinkTheme,
} from 'shared/ui';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { AppButtonSize } from 'shared/ui/AppButton/AppButton';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}
const Sidebar:FC<SidebarProps> = (props) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const toggleCollapsed = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={cn(
                styles.Sidebar,
                {
                    [styles.collapsed]: collapsed,
                },
                className,
            )}
        >
            <AppButton
                data-testid="sidebar-toggle"
                onClick={toggleCollapsed}
                className={cn(styles.collapsedBtn)}
                theme={AppButtonTheme.BACKGROUND_INVERTED}
                square
                size={AppButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </AppButton>
            <div className={cn(styles.items)}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={styles.item}
                >
                    <HomeIcon className={styles.icon} />
                    <span className={styles.link}>{t('Main page title')}</span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                    className={styles.item}
                >
                    <AboutIcon className={styles.icon} />
                    <span className={styles.link}>{t('About page title')}</span>
                </AppLink>
            </div>
            <div className={cn(styles.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};

export default Sidebar;
