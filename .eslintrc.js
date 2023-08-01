module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: ['jest'],
  rules: {
    // Config `eslint` rules
    'no-const-assign': 2,
    'no-undef': 2,
    'no-var': 2,
    'prefer-const': 2,
    'react/react-in-jsx-scope': 0,
  },
}
