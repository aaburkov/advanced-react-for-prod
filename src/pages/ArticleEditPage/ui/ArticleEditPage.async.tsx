import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(
    () => new Promise(
    // @ts-ignore
    // eslint-disable-next-line no-promise-executor-return
        (resolve) => setTimeout(() => resolve(import('./ArticleEditPage')), 1000),
    ),
);
