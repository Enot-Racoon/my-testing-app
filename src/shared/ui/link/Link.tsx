import { NavLink, NavLinkProps } from 'react-router-dom'
import { useMemo } from 'react'

interface PropsWithClassNames {
  className?: string
  pendingClassName?: string
  activeClassName?: string
}

export interface LinkProp extends Omit<NavLinkProps, 'className'>, PropsWithClassNames {}

const getClassNameFn =
  ({ className, pendingClassName, activeClassName }: PropsWithClassNames): NavLinkProps['className'] =>
  ({ isActive, isPending }) => {
    const dynamicClassname = isPending ? pendingClassName : isActive ? activeClassName : ''
    return `${className} ${dynamicClassname}`
  }

export const Link = ({ className, pendingClassName, activeClassName, ...props }: LinkProp) => {
  const getClassName = useMemo(
    () =>
      getClassNameFn({
        className,
        pendingClassName,
        activeClassName,
      }),
    [activeClassName, className, pendingClassName],
  )
  return <NavLink className={getClassName} {...props} />
}
