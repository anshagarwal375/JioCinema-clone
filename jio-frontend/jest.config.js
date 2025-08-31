module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    testMatch: ['**/*.test.js', '**/*.test.jsx'],
    moduleDirectories: ['node_modules', '<rootDir>'],
};