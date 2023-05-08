import {
    FC, MutableRefObject, PropsWithChildren, memo, useRef,
} from 'react';
import cn from 'shared/lib/classNames';
import { useInifiniteScroll } from 'shared/hooks/useInifiniteScroll/useInifiniteScroll';
import styles from './PageContainer.module.scss';

interface PageContainerProps {
    className?: string;
    onScrollEnd?: () => void
}
const PageContainer: FC<PropsWithChildren<PageContainerProps>> = (props) => {
    const {
        className,
        children,
        onScrollEnd,
    } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInifiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd,
    });
    return (
        <main
            ref={wrapperRef}
            className={cn(
                styles.PageContainer,
                className,
            )}
        >
            {children}
            <div ref={triggerRef} />
        </main>
    );
};

export default memo(PageContainer);
