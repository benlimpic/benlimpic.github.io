export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier', // disables conflicting ESLint rules
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  rules: {
    // Custom rules (optional)
    'react/react-in-jsx-scope': 'off', // Not needed with React 17+
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
