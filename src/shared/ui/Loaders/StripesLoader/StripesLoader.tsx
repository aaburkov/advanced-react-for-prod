import cn from 'shared/lib/classNames';
import { FC } from 'react';
import styles from './StripesLoader.module.scss';

interface StripesLoaderProps {
    className?: string;
}
const StripesLoader: FC<StripesLoaderProps> = (props) => {
    const { className } = props;
    return (
        <div className={cn(styles.StripesLoader, className)}>
            <div />
            <div />
            <div />
        </div>
    );
};

export default StripesLoader;
