import type { ComponentType } from 'react'
import type { RouteObject } from 'react-router-dom'

/*
  This helper of library react-router-typesafe-routes
  for prepare router for RouterProvider of react-router-dom lib
 */

export type BaseRoute = {
  path: string
  Component: ComponentType
  relativePath: string
  types: object
  $: unknown
}

export const isBaseRoute = (route: unknown): route is BaseRoute => 'path' in (route as NonNullable<unknown>)

// destruct for omit some fields
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getRouteChildren = ({ path, Component, relativePath, types, $, ...rest }: BaseRoute) => {
  return Object.values(rest).filter(isBaseRoute)
}

export const createRouter = (
  routes: BaseRoute | Record<string, BaseRoute>,
  flatChildren: boolean = false,
): RouteObject[] => {
  const traverse = (route: BaseRoute): RouteObject => {
    const { path, Component } = route
    const children = getRouteChildren(route)

    return { path, Component, children: children.length ? children.map(route => traverse(route)) : undefined }
  }

  // if collection
  const result: RouteObject[] = isBaseRoute(routes)
    ? [traverse(routes)]
    : Object.values(routes).map(route => traverse(route))

  if (flatChildren) {
    const flatResult: RouteObject[] = []
    const unwrap = (routes: RouteObject[]) =>
      routes.forEach(route => {
        flatResult.push(route)
        if (route.children?.length) {
          unwrap(route.children)
          route.children = []
        }
      })
    unwrap(result)
    return flatResult
  }

  return result
}
