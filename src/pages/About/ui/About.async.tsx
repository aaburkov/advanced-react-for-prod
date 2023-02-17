import { lazy } from 'react';

export const AboutPageAsync = lazy(
    () => new Promise(
        // @ts-ignore
        // eslint-disable-next-line no-promise-executor-return
        (resolve) => setTimeout(() => resolve(import('./About')), 1000),
    ),
);
