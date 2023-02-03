import { lazy } from 'react';

export const MainPageAsync = lazy(
  () => new Promise(
      // @ts-ignore
      resolve => setTimeout(() => resolve(import('./Main')), 1000)
  )
)
