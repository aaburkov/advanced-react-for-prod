import { lazy } from 'react';

export const MainPageAsync = lazy(
    () => new Promise(
    // @ts-ignore
    // eslint-disable-next-line no-promise-executor-return
        (resolve) => setTimeout(() => resolve(import('./Main')), 1000),
    ),
);
