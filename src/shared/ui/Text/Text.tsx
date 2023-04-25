import { FC, PropsWithChildren, memo } from 'react';
import cn from 'shared/lib/classNames';
import styles from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    ERROR = 'error',
}

export enum TextAlign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme,
    align?: TextAlign,
    size?: TextSize,
}

const Text: FC<PropsWithChildren<TextProps>> = (props) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    return (
        <div className={cn(styles.Text, styles[theme], styles[align], styles[size], className)}>
            {title && <p className={styles.title}>{title}</p> }
            {text && <p className={styles.text}>{text}</p> }
        </div>
    );
};

export default memo(Text);
