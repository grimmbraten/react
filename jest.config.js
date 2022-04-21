module.exports = {
  bail: 1,
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
    '~config': '<rootDir>/./src/config',
    '~tests/(.*)$': '<rootDir>/./tests/$1',
    '~hooks/(.*)$': '<rootDir>/./src/app/hooks/$1',
    '~contexts/(.*)$': '<rootDir>/./src/app/contexts/$1'
  }
};
