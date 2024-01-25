import { createConfig } from '@src/shared/lib/utils'

export default createConfig({
  fakeApiUrl: import.meta.env.VITE_APP_FAKE_API_URL,
  pageNotFoundUrl: import.meta.env.VITE_APP_PAGE_NOT_FOUND_URL,
  appID: import.meta.env.VITE_APP_MONGO_APP_ID,
  dbServiceName: import.meta.env.VITE_APP_MONGO_APP_NAME,
  apiKey: import.meta.env.VITE_APP_MONGO_API_KEY,
  dbName: import.meta.env.VITE_APP_MONGO_DB_NAME,
} as const)
