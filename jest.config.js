module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  transform: {
    '\\.ts': ['babel-jest', { configFile: './babel.config.jest.js' }]
  },
  moduleNameMapper: {
    '@features/(.*)': '<rootDir>/src/features/$1',
    '@config/(.*)': '<rootDir>/src/config/$1'
  }
}
