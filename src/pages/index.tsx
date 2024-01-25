import { useMemo } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { routerConfig } from './routes'

export default function Pages() {
  const router = useMemo(() => createBrowserRouter(routerConfig), [])

  return <RouterProvider router={router} fallbackElement={<>Error</>} />
}

