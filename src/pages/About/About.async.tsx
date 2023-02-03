import { lazy } from 'react';

export const AboutPageAsync = lazy(
    () => new Promise(
        // @ts-ignore
        resolve => setTimeout(() => resolve(import('./About')), 2000)
    )
)