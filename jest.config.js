module.exports = {
  preset: 'ts-jest',
  // transform: {
  //   '^.+\\.jsx?$': 'babel-jest'
  //   // '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx'
  // },
  testEnvironment: 'jsdom',
  testRegex: ['/src/.*\\.(test|spec)?\\.(ts|tsx)$', '/stories/Stories.spec.ts'],
  // moduleFileExtensions: ["ts", "tsx", "json", "node"],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!src/**/*.stories.tsx',
    '!src/**/*mock*'
  ],
  coverageReporters: ['json', 'html', 'lcov', 'text', 'text-summary'],
  setupFilesAfterEnv: ['jest-extended', './devtools/jest/setupTests.js'],
  moduleNameMapper: {
    '^#components$': '<rootDir>/src/components',
    '^#constants$': '<rootDir>/src/constants',
    '^#utils$': '<rootDir>/src/utils',
    '^#theme$': '<rootDir>/src/theme'
  }
}
