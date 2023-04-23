import { lazy } from 'react';

export const ArticlesPageAsync = lazy(
    () => new Promise(
    // @ts-ignore
    // eslint-disable-next-line no-promise-executor-return
        (resolve) => setTimeout(() => resolve(import('./Articles')), 1000),
    ),
);
