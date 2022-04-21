module.exports = {
  verbose: true,
  testTimeout: 10000,
  collectCoverage: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./tests/setup.js'],
  coverageReporters: ['lcov', 'text-summary'],
  coveragePathIgnorePatterns: [
    'node_modules',
    'build',
    'tests',
    'src/config',
    'src/public',
    'src/routes'
  ],
  moduleNameMapper: {
    '~config': '<rootDir>/./src/config'
  }
};
