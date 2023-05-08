import { FC, useState } from 'react';
import cn from 'shared/lib/classNames';
import {
    AppButton, AppButtonTheme,
} from 'shared/ui';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { AppButtonSize } from 'shared/ui/AppButton/AppButton';
import styles from './Sidebar.module.scss';
import { SidebarItemsList } from '../model/items';
import SidebarItem from './SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string
}
const Sidebar:FC<SidebarProps> = (props) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <menu
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
                {
                    SidebarItemsList.map((item) => (
                        <SidebarItem
                            key={item.path}
                            item={item}
                        />
                    ))
                }
            </div>
            <div className={cn(styles.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </menu>
    );
};

export default Sidebar;
