import { FC, PropsWithChildren, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cn from 'shared/lib/classNames';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

const AppLink: FC<PropsWithChildren<AppLinkProps>> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={cn(styles.AppLink, styles[theme], className)}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default memo(AppLink);
