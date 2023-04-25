import { lazy } from 'react';

export const ArticleDetailsAsync = lazy(
    () => new Promise(
    // @ts-ignore
    // eslint-disable-next-line no-promise-executor-return
        (resolve) => setTimeout(() => resolve(import('./ArticleDetailsPage')), 1000),
    ),
);
