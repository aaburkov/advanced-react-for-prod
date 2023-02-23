import { FC, PropsWithChildren, useState } from 'react';
import cn from 'shared/lib/classNames';
import { AppButton } from 'shared/ui';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
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
            >
                {t('Toggle')}

            </AppButton>
            <div className={cn(styles.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};

export default Sidebar;
