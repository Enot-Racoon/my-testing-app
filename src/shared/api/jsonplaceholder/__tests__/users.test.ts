// noinspection SuspiciousTypeOfGuard

import 'jest'

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
    expect(typeof user.id === 'number').toBeTruthy()

    expect('name' in user).toBeTruthy()
    expect(typeof user.name === 'string').toBeTruthy()

    expect('username' in user).toBeTruthy()
    expect(typeof user.username === 'string').toBeTruthy()

    expect('email' in user).toBeTruthy()
    expect(typeof user.email === 'string').toBeTruthy()

    expect('address' in user).toBeTruthy()
    expect(isObject(user.address)).toBeTruthy()

    expect('street' in user.address).toBeTruthy()
    expect(typeof user.address.street === 'string').toBeTruthy()

    expect('suite' in user.address).toBeTruthy()
    expect(typeof user.address.suite === 'string').toBeTruthy()

    expect('city' in user.address).toBeTruthy()
    expect(typeof user.address.city === 'string').toBeTruthy()

    expect('zipcode' in user.address).toBeTruthy()
    expect(typeof user.address.zipcode === 'string').toBeTruthy()

    expect('geo' in user.address).toBeTruthy()
    expect(isObject(user.address.geo)).toBeTruthy()

    expect('lat' in user.address.geo).toBeTruthy()
    expect(typeof user.address.geo.lat === 'string').toBeTruthy()

    expect('lng' in user.address.geo).toBeTruthy()
    expect(typeof user.address.geo.lng === 'string').toBeTruthy()

    expect('phone' in user).toBeTruthy()
    expect(typeof user.phone === 'string').toBeTruthy()

    expect('website' in user).toBeTruthy()
    expect(typeof user.website === 'string').toBeTruthy()

    expect('company' in user).toBeTruthy()
    expect(isObject(user.company)).toBeTruthy()

    expect('name' in user.company).toBeTruthy()
    expect(typeof user.company.name === 'string').toBeTruthy()

    expect('catchPhrase' in user.company).toBeTruthy()
    expect(typeof user.company.catchPhrase === 'string').toBeTruthy()

    expect('bs' in user.company).toBeTruthy()
    expect(typeof user.company.bs === 'string').toBeTruthy()
  })
})
