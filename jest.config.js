module.exports = {
  ...require("@snowpack/app-scripts-svelte/jest.config.js")(),

  testMatch: [
    "<rootDir>/frontend/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/frontend/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],
};
