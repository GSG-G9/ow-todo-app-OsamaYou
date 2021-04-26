module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-use-before-define': 'off',
    'global-require': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/extensions': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'testing-library/no-node-access': 'off',
  },
  globals: {
    JSX: true,
  },
};
