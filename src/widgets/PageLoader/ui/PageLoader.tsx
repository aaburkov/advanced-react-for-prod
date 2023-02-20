import cn from 'shared/lib/classNames';
import { FC, ReactNode } from 'react';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
    loader?: ReactNode;
}
const PageLoader: FC<PageLoaderProps> = (props) => {
    const {
        className,
        loader = <div>LOADING...--</div>,
    } = props;
    return (
        <div className={cn(styles.PageLoader, className)}>
            {loader}
        </div>
    );
};

export default PageLoader;
