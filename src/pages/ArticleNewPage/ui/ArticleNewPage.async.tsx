import { lazy } from 'react';

export const ArticleNewPageAsync = lazy(
    () => new Promise(
    // @ts-ignore
    // eslint-disable-next-line no-promise-executor-return
        (resolve) => setTimeout(() => resolve(import('./ArticleNewPage')), 1000),
    ),
);
