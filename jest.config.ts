export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': '<rootDir>/jest/__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '^@src/(.*)$': '<rootDir>src/$1',
    '^@ui/(.*)$': '<rootDir>src/shared/ui/$1',
  },
  resetMocks: true,
}
