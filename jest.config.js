module.exports = {
  moduleNameMapper: {
    '\\.svg': '<rootDir>/src/__mocks__/svgMock.js',
  },
  preset: 'react-native',
  testPathIgnorePatterns: ['/node_modules', '/android', '/ios'],
  transformIgnorePatterns: ['node_modules/react-native-responsive-fontsize'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
