module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  rootDir: './',
  moduleNameMapper: {
    '^#/(.*)$': '<rootDir>/src/$1',
    '^!tests/(.*)$': '<rootDir>/tests/$1'
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
