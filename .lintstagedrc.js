module.exports = {
  "*.{js,jsx,ts,tsx}": [
    "prettier --write",
    "eslint -c .eslintrc.js --fix",
    "stylelint",
  ],
  "*.{json,md}": ["prettier --write"],
};
