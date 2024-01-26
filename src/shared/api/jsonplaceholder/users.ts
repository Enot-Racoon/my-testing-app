import { User } from '@src/shared/api/jsonplaceholder/types'
import Config from '@src/config'

const BASE_URL = '/users'

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch(`${Config.fakeApiUrl}${BASE_URL}`)
  return response.json()
}
