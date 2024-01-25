import { ComponentType, type PropsWithChildren } from 'react'

export interface DefaultLayoutProps {
  header?: ComponentType
}

export default function Layout({ children, header: Header }: PropsWithChildren<DefaultLayoutProps>) {
  return (
    <div>
      {Header && <Header />}
      <div>{children}</div>
    </div>
  )
}
