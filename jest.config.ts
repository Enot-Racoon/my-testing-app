import { config } from 'dotenv'

const { parsed: env } = config()

/** @type {import('jest').Config} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        diagnostics: { ignoreCodes: [1343] },
        astTransformers: {
          before: [
            {
              path: 'node_modules/ts-jest-mock-import-meta',
              options: { metaObjectReplacement: { env } },
            },
          ],
        },
      },
    ],
  },
  setupFilesAfterEnv: ['<rootDir>tests/jest/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': '<rootDir>tests/jest/__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^@src/(.*)$': '<rootDir>src/$1',
    '^@ui/(.*)$': '<rootDir>src/shared/ui/$1',
  },
  resetMocks: true,
}
