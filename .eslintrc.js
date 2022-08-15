module.exports = {
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:import/warnings',
    'plugin:import/errors',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'airbnb',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', 'unused-imports', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-unused-expressions': 'off',
    'consistent-return': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'react/jsx-no-constructed-context-values': 'warn',
    'react/require-default-props': 'off',
    'react/function-component-definition': [
      1,
      {
        namedComponents: ['arrow-function'],
        unnamedComponents: ['arrow-function']
      }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ]
  },
  globals: {
    JSX: true
  }
}
