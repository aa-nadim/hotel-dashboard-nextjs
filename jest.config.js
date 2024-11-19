const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], 
  testEnvironment: 'jest-environment-jsdom', 
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1', 
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1', 
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1', 
  },
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)', 
    '**/?(*.)+(spec|test).[tj]s?(x)', 
  ],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], 
  collectCoverage: true, 
  collectCoverageFrom: [
    'src/**/*.ts(x)?', 
    '!src/**/*.d.ts', 
  ],
  coverageDirectory: 'coverage', 
  coverageThreshold: {
    global: {
      branches: 70, 
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', 
  },
};

module.exports = createJestConfig(customJestConfig);
