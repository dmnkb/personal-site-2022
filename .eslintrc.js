module.exports = {
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "next/core-web-vitals",
    "prettier",
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  rules: {
    "no-plusplus": "off",
  },
};
