import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import cn from 'shared/lib/classNames';
import styles from './AppButton.module.scss';

export enum AppButtonTheme {
    DEFAULT = 'default',
    CLEAR = 'clear',
    OUTLINE = 'outline'
}
interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: AppButtonTheme
}
const AppButton: FC<PropsWithChildren<AppButtonProps>> = (props) => {
    const {
        className,
        theme = AppButtonTheme.DEFAULT,
        children,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={cn(styles.AppButton, styles[theme], className)}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default AppButton;
