module.exports = {
    testEnvironment: "jsdom",

    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],

    transform: {
        "^.+\\.(js|jsx)$": "babel-jest",
    },

    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
        "^@/(.*)$": "<rootDir>/src/$1",
    },

    testMatch: [
        "<rootDir>/src/**/*.test.(js|jsx)",
        "<rootDir>/src/**/*.spec.(js|jsx)",
        "<rootDir>/__tests__/**/*.test.(js|jsx)"
    ],
};
