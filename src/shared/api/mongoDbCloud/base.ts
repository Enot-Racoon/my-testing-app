import * as Realm from 'realm-web'

import Config from '@src/config'
import { type Product } from '@src/shared/api'

export const getDb = async () => {
  const app = new Realm.App({ id: Config.appID })

  async function loginApiKey(apiKey: string) {
    const credentials = Realm.Credentials.apiKey(apiKey)
    const user = await app.logIn(credentials)
    console.assert(user.id === app.currentUser?.id)
    return user
  }

  await loginApiKey(Config.apiKey)
  const mongo = app.currentUser?.mongoClient(Config.dbServiceName)

  return mongo?.db(Config.dbName)
}

export const getDbCollection = async (connection: string) => {
  return (await getDb())?.collection(connection)
}

export const getProducts = async (): Promise<Product[]> => {
  const collection = await getDbCollection('products')

  return (await collection?.find()) as Product[]
}
