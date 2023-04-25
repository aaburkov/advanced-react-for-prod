import {
    CSSProperties, FC, PropsWithChildren, memo, useMemo,
} from 'react';
import cn from 'shared/lib/classNames';
import styles from './Skeleton.module.scss';

export enum SkeletonTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface SkeletonProps {
    className?: string
    height?: string | number
    width?: string | number
    borderRadius?: string
    style?: CSSProperties
}

const Skeleton: FC<PropsWithChildren<SkeletonProps>> = (props) => {
    const {
        className,
        height = 50,
        width = '100%',
        borderRadius = '5px',
        style,
    } = props;

    const customStyle = useMemo<CSSProperties>(() => ({
        height,
        width,
        borderRadius,
        ...style,
    }), []);
    return (
        <div
            style={customStyle}
            className={cn(styles.Skeleton, className)}
        />
    );
};

export default memo(Skeleton);
