import { FC, memo } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { ISidebarItem } from 'widgets/Sidebar/model/items';
import { useTranslation } from 'react-i18next';
import cn from 'shared/lib/classNames';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
    className?: string,
    item: ISidebarItem
}

const SidebarItem:FC<SidebarItemProps> = (props) => {
    const { item, className } = props;
    const { t } = useTranslation();
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item?.path}
            className={cn(styles.item, className)}
        >
            <item.Icon className={styles.icon} />
            <span className={styles.link}>{t(item.text)}</span>
        </AppLink>
    );
};

export default memo(SidebarItem);
