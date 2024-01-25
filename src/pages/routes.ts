import { lazy } from 'react'
import { createRoute, createRouter } from '@src/shared/lib/router'

export const Routes = {
  Home: createRoute({
    path: '',
    Component: lazy(() => import('./home')),
  }),
  Products: createRoute({
    path: 'products',
    Component: lazy(() => import('./product-list')),
  }),
  Users: createRoute({
    path: 'users',
    Component: lazy(() => import('./user-list')),
  }),
  NotFound: createRoute({
    path: '*',
    Component: lazy(() => import('./notFound')),
  }),
} as const

export const routerConfig = createRouter(Routes, true)

export default Routes
