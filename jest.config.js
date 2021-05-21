module.exports = {
  preset: 'react-native',
  verbose: true,
  testMatch: ['**/__tests__/**/*.test.js'],
  setupFiles: [
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js',
    '<rootDir>/__tests__/jest.setup.js',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    '/node_modules/(?!(@react-native|react-native)/).*/',
    'node_modules/(?!react-native|react-native-maps)',
    // '/node_modules/(?!native-base)/',
  ],
  testPathIgnorePatterns: [
    // incluir de acordo com a necessidade do projeto
    '<rootDir>/ios',
    '<rootDir>/android',
    '<rootDir>/tests/jest.setup.js',
    '<rootDir>/node_modules',
  ],
};
