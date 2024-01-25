import 'jest'
import '@testing-library/jest-dom'
import { act, render, screen } from '@testing-library/react'

import App from '@src/app'

test('Renders the main page', async () => {
  await act(async () => render(<App />))
  const linkElement = screen.getByText(/My Testing App/i)
  expect(linkElement).toBeInTheDocument()
})
