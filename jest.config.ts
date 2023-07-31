import type { Config } from '@jest/types';
const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    testMatch: [
        '<rootDir>/src/tests/**/*.spec.ts',
        '<rootDir>/tests/**/*.test.ts',
    ],
};

export default config;
