import * as Realm from 'realm-web'

import Config from '@src/config'
import { Document } from '@src/shared/api'

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

export const getDbCollection = async <T>(connection: string) => {
  return (await getDb())?.collection<Document<T>>(connection)
}
