/* eslint-disable */
import type { ComponentType } from 'react'
import { route } from 'react-router-typesafe-routes/dom'

import type {
  ParamType,
  PathParam,
  RouteTypes,
  RouteWithChildren,
  SanitizedChildren,
  SanitizedPath,
  SearchParamType,
  StateParamType,
  Type,
} from './types'

/*
 Helper of react-router-typesafe-routes lib for extend route object by Component field
 */
export const createRoute = <
  TChildren = void,
  TPath extends string = string,
  TPathTypes extends Partial<
    Record<PathParam<SanitizedPath<TPath>, 'all', 'out'>, ParamType<unknown, never> | Type<any, string, any>>
  > = Record<never, never>,
  TSearchTypes extends Partial<
    Record<string, SearchParamType<unknown, never> | Type<any, string | string[], any>>
  > = Record<never, never>,
  THash extends string[] = never[],
  TStateTypes extends Partial<Record<string, StateParamType<unknown, never> | Type<any, any, any>>> = Record<
    never,
    never
  >,
>({
  path,
  children,
  types,
  Component,
}: {
  path: SanitizedPath<TPath>
  children?: SanitizedChildren<TChildren> | undefined
  types?: RouteTypes<TPathTypes, TSearchTypes, THash, TStateTypes>
  Component: ComponentType
}): RouteWithChildren<TChildren, TPath, TPathTypes, TSearchTypes, THash, TStateTypes> => {
  return Object.assign(route(path, types, children), { Component }) as RouteWithChildren<
    TChildren,
    TPath,
    TPathTypes,
    TSearchTypes,
    THash,
    TStateTypes
  >
}
