const error = 2;
const warn = 1;
const ignore = 0;

module.exports = {
  "parser": "babel-eslint",
  "plugins": ["react"],
  "extends": "eslint-config-airbnb",
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jest": true,
  },
  "globals": {
    "graphql": true,
    "__PATH_PREFIX__": true
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    }
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
    },
  },
  "rules": {
    "strict": [error, "never"],
    "react/button-has-type": ignore,
    "react/jsx-uses-react": error,
    "react/jsx-uses-vars": error,
    "react/jsx-filename-extension": ignore,
    "react/no-danger": ignore,
    "react/prefer-stateless-function": ignore,
    "react/react-in-jsx-scope": error,
    "class-methods-use-this": ignore,
    "import/no-unresolved": [error, { "caseSensitive": false }],
    "no-console": [
      error,
      {
        "allow": ["warn", "error", "info"],
      },
    ],
  },
};
