module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  ignorePatterns: [
    "dist/"
  ],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
  overrides: [
    {
      files: ['*.test.js'],
      env: {
        jest: true,
      },
    },
  ],
}
