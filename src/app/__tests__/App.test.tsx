import 'jest'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import App from '@src/app'

test('Renders the main page', () => {
  render(<App />)
  const linkElement = screen.getByText(/vite \+ react/i)
  expect(linkElement).toBeInTheDocument()
})
