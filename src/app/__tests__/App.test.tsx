import 'jest'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { act, render, screen, waitFor } from '@testing-library/react'
import App from '@src/app'

test('Renders the main page', async () => {
  const app = await act(async () => render(<App />))
  const linkElement = screen.getByText(/My Testing App/i)

  expect(linkElement).toBeInTheDocument()

  expect(app).toMatchSnapshot()
})

test('Renders the users page', async () => {
  const app = await act(async () => render(<App />))
  const linkElement = screen.getByText(/Users/i)

  expect(linkElement).toBeInTheDocument()
  expect(linkElement.getAttribute('href')).toContain('/users')

  await act(async () => {
    await userEvent.click(linkElement)
  })

  await waitFor(() => expect(app.container.querySelector('.loader')).toBeInTheDocument())
  await waitFor(() => expect(app.container.querySelector('.loader')).not.toBeInTheDocument())

  expect(app).toMatchSnapshot()
})
