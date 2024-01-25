import { Suspense } from 'react'
import Pages from '@src/pages'

import './styles.css'

const App = () => (
  <Suspense>
    <Pages />
  </Suspense>
)

export default App
