import {
    FC, PropsWithChildren, memo, useCallback,
} from 'react';
import cn from 'shared/lib/classNames';
import CopyIcon from 'shared/assets/icons/copy.svg';
import styles from './Code.module.scss';
import AppButton, { AppButtonTheme } from '../AppButton/AppButton';
import Icon from '../Icon/Icon';

interface CodeProps {
    className?: string
    text: string
}

const Code: FC<CodeProps> = (props) => {
    const {
        className,
        text,
    } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);
    return (
        <pre className={cn(styles.Code, className)}>
            <AppButton
                onClick={onCopy}
                className={styles.copyBtn}
                theme={AppButtonTheme.CLEAR}
            >
                <CopyIcon className={styles.copyIcon} />
            </AppButton>
            <code>
                {text}
            </code>
        </pre>
    );
};

export default memo(Code);
