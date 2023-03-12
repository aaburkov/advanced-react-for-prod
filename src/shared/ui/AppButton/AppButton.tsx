import {
    ButtonHTMLAttributes, FC, PropsWithChildren, memo,
} from 'react';
import cn from 'shared/lib/classNames';
import styles from './AppButton.module.scss';

export enum AppButtonTheme {
    DEFAULT = 'default',
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum AppButtonSize {
    S = 'sizeS',
    M = 'sizeM',
    L = 'sizeL',
    XL = 'sizeXL',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: AppButtonTheme,
    square?: boolean,
    size?:AppButtonSize,
}
const AppButton: FC<PropsWithChildren<AppButtonProps>> = (props) => {
    const {
        className,
        theme = AppButtonTheme.DEFAULT,
        children,
        square,
        size = AppButtonSize.M,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={cn(
                styles.AppButton,
                styles[theme],
                {
                    [styles.square]: square,
                },
                styles[size],
                className,
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default memo(AppButton);
