import { MutableRefObject, useEffect, useRef } from 'react';

export interface UseInifiniteScrollOptions {
    callback?: () => void
    triggerRef: MutableRefObject<HTMLElement>
    wrapperRef: MutableRefObject<HTMLElement>
}

export function useInifiniteScroll(
    { callback, triggerRef, wrapperRef }: UseInifiniteScrollOptions,
) {
    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const curTriggerRef = triggerRef.current;
        const curWrapperRef = wrapperRef.current;

        if (callback) {
            const options = {
                root: curWrapperRef,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerRef.current);
        }
        return () => {
            if (curTriggerRef && observer) {
                observer.unobserve(curTriggerRef);
            }
        };
    }, []);
}
