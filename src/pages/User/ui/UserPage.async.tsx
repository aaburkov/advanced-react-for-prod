import { lazy } from 'react';

export const UserPageAsync = lazy(
    () => new Promise(
    // @ts-ignore
    // eslint-disable-next-line no-promise-executor-return
        (resolve) => setTimeout(() => resolve(import('./UserPage')), 1000),
    ),
);
