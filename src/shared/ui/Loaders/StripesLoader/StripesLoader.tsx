import cn from 'shared/lib/classNames';
import {
    CSSProperties, FC, memo, useMemo,
} from 'react';
import styles from './StripesLoader.module.scss';

interface StripesLoaderProps {
    className?: string;
    size?: number
}
const StripesLoader: FC<StripesLoaderProps> = (props) => {
    const {
        className,
        size = 80,
    } = props;

    const customStyle = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), []);
    return (
        <div
            style={customStyle}
            className={cn(styles.StripesLoader, className)}
        >
            <div />
            <div />
            <div />
        </div>
    );
};

export default memo(StripesLoader);
