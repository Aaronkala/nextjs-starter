module.exports = {
  "*.{js,jsx,ts,tsx}": ["prettier --write", "lint", "lint:styles"],
  "*.{json,md}": ["prettier --write"],
};
