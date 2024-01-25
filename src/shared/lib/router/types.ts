import { ComponentType } from 'react'
import type { Route as RouteBase } from 'react-router-typesafe-routes/dom'

/*
Override and extend some types of react-router-typesafe-routes lib
 */

export type {
  ParamType,
  PathParam,
  RouteTypes,
  SanitizedChildren,
  SanitizedPath,
  SearchParamType,
  StateParamType,
  Type,
} from 'react-router-typesafe-routes/dom'

export interface Route<TPath extends string, TPathTypes, TSearchTypes, THash extends string[], TStateTypes>
  extends RouteBase<TPath, TPathTypes, TSearchTypes, THash, TStateTypes> {
  Component: ComponentType
}

export type Merge<T, U> = Omit<T, keyof U> & U

export type RouteWithChildren<
  TChildren,
  TPath extends string,
  TPathTypes,
  TSearchTypes,
  THash extends string[],
  TStateTypes,
> = DecoratedChildren<TChildren, TPath, TPathTypes, TSearchTypes, THash, TStateTypes> &
  Route<TPath, TPathTypes, TSearchTypes, THash, TStateTypes> & {
    $: DecoratedChildren<TChildren, TPath, TPathTypes, TSearchTypes, THash, TStateTypes, true>
  }

type DecoratedChildren<
  TChildren,
  TPath extends string,
  TPathTypes,
  TSearchTypes,
  THash extends string[],
  TStateTypes,
  TExcludePath extends boolean = false,
> = {
  [TKey in keyof TChildren]: TChildren[TKey] extends RouteWithChildren<
    infer TChildChildren,
    infer TChildPath,
    infer TChildPathTypes,
    infer TChildSearchTypes,
    infer TChildHash,
    infer TChildStateTypes
  >
    ? RouteWithChildren<
        TChildChildren,
        TExcludePath extends true
          ? TChildPath
          : TPath extends ''
            ? TChildPath
            : TChildPath extends ''
              ? TPath
              : `${TPath}/${TChildPath}`,
        TExcludePath extends true ? TChildPathTypes : Merge<TPathTypes, TChildPathTypes>,
        Merge<TSearchTypes, TChildSearchTypes>,
        THash | TChildHash,
        Merge<TStateTypes, TChildStateTypes>
      >
    : TChildren[TKey]
}
