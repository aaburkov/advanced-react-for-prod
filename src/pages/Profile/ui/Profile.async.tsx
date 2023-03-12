import { lazy } from 'react';

export const ProfilePageAsync = lazy(
    () => new Promise(
    // @ts-ignore
    // eslint-disable-next-line no-promise-executor-return
        (resolve) => setTimeout(() => resolve(import('./Profile')), 1000),
    ),
);
