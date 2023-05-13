import {
    FC, MutableRefObject, PropsWithChildren, memo, useRef, UIEvent, useEffect,
} from 'react';
import cn from 'shared/lib/classNames';
import { useInifiniteScroll } from 'shared/hooks/useInifiniteScroll/useInifiniteScroll';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { useLocation } from 'react-router-dom';
import { useThrottle } from 'shared/hooks/useThrottle/useThrottle';
import styles from './PageContainer.module.scss';
import { getPageScrollByPath } from '../model/selectors/scrollSelectors';
import { PageScrollActions } from '../model/slices/ScrollSlice';

interface PageContainerProps {
    className?: string;
    onScrollEnd?: () => void
    saveScroll?: boolean
}
const PageContainer: FC<PropsWithChildren<PageContainerProps>> = (props) => {
    const {
        className,
        children,
        onScrollEnd,
        saveScroll = false,
    } = props;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useAppSelector((state) => getPageScrollByPath(state, pathname));
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    useInifiniteScroll({
        wrapperRef,
        triggerRef,
        callback: onScrollEnd,
    });

    const onScrollHandler = useThrottle((event: UIEvent<HTMLDivElement>) => {
        if (!saveScroll) return;

        dispatch(PageScrollActions.setScrollPosition({
            path: pathname,
            position: event.currentTarget.scrollTop,
        }));
    }, 500);
    // const currentScrollPosition = useAppSelector(getPageScrollByPath())

    return (
        <main
            ref={wrapperRef}
            onScroll={onScrollHandler}
            className={cn(
                styles.PageContainer,
                className,
            )}
        >
            {children}
            {onScrollEnd && (
                <div className={styles.infiniteTrigger} ref={triggerRef} />
            )}

        </main>
    );
};

export default memo(PageContainer);
