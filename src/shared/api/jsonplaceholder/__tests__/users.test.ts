import 'jest'
import 'whatwg-fetch'

import { getUsers } from '../users'

const isObject = (o: unknown) => typeof o === 'object' && !Array.isArray(o) && o !== null

test('Testing user service', async (): Promise<void> => {
  const users = await getUsers()

  expect(users).toBeTruthy()
  expect(Array.isArray(users)).toBeTruthy()
  expect(users.length).toBeGreaterThan(0)

  users.forEach(user => {
    expect(isObject(user)).toBeTruthy()
    expect('id' in user).toBeTruthy()
    expect('name' in user).toBeTruthy()
    expect('username' in user).toBeTruthy()
    expect('email' in user).toBeTruthy()

    expect('address' in user).toBeTruthy()
    expect(isObject(user.address)).toBeTruthy()
    expect('street' in user.address).toBeTruthy()
    expect('suite' in user.address).toBeTruthy()
    expect('city' in user.address).toBeTruthy()
    expect('zipcode' in user.address).toBeTruthy()
    expect(isObject(user.address.geo)).toBeTruthy()
    expect('lat' in user.address.geo).toBeTruthy()
    expect('lng' in user.address.geo).toBeTruthy()

    expect('phone' in user).toBeTruthy()
    expect('website' in user).toBeTruthy()
    expect('company' in user).toBeTruthy()
    expect(isObject(user.company)).toBeTruthy()
    expect('name' in user.company).toBeTruthy()
    expect('catchPhrase' in user.company).toBeTruthy()
    expect('bs' in user.company).toBeTruthy()
  })
})
