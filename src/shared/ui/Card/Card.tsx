import {
    FC, HTMLAttributes, PropsWithChildren, memo,
} from 'react';
import cn from 'shared/lib/classNames';
import styles from './Card.module.scss';

export enum CardTheme {
    DEFAULT = 'default',
    OUTLINE = 'outline',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    theme?: CardTheme
}
const Card: FC<PropsWithChildren<CardProps>> = (props) => {
    const {
        className,
        theme = CardTheme.DEFAULT,
        children,
        ...otherProps
    } = props;

    return (
        <div
            className={cn(
                styles.Card,
                styles[theme],
                className,
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
};

export default memo(Card);
