import { FC, PropsWithChildren } from 'react';
import cn from 'shared/lib/classNames';
import styles from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme
}

const Text: FC<PropsWithChildren<TextProps>> = (props) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
    } = props;

    return (
        <div className={cn(styles.Text, styles[theme], className)}>
            {title && <p className={styles.title}>{title}</p> }
            {text && <p className={styles.text}>{text}</p> }
        </div>
    );
};

export default Text;
