module.exports = {
  env: {
    es6: true,
  },
  parser: "babel-eslint",
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "no-param-reassign": "off",
    "no-console": ["error", { allow: ["tron"] }]
  },
};
