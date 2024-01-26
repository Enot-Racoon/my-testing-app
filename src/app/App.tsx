import { Suspense } from 'react'

import Pages from '@src/pages'
import { Loader } from '@ui/loader'

import './styles.css'

const App = () => (
  <Suspense fallback={<Loader />}>
    <Pages />
  </Suspense>
)

export default App
