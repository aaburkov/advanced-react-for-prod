import {
    FC, HTMLAttributes, PropsWithChildren, memo,
} from 'react';
import cn from 'shared/lib/classNames';
import styles from './Card.module.scss';

export enum CardTheme {
    DEFAULT = 'default',
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}
const Card: FC<PropsWithChildren<CardProps>> = (props) => {
    const {
        className,
        children,
        ...otherProps
    } = props;

    return (
        <div
            className={cn(
                styles.Card,
                className,
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
};

export default memo(Card);
