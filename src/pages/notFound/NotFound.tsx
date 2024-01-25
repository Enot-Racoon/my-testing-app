import Layout from '@src/pages/layout'
import Header from '@src/widgets/header'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Config from '@src/config'

export const NotFound = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname !== Config.pageNotFoundUrl) {
      // force redirect
      window.location.href = Config.pageNotFoundUrl
    }
  }, [pathname])

  return (
    <Layout header={Header}>
      <h1>Page Not Found!</h1>
      <a href="/">Back to Home page</a>
    </Layout>
  )
}

export default NotFound
