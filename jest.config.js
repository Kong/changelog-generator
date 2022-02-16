/** @type { import('@jest/types').Config.InitialOptions } */
module.exports = {
  globals: {
    'ts-jest': {
      isolatedModules: false,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  resetMocks: true,
  resetModules: true,
  testEnvironment: 'node',
  testRegex: ['.+\\.test\\.tsx?$'],
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  verbose: false,
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
