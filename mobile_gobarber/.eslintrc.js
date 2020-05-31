module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'bebel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react-jsx-filename-extension': ['error', { extensions: ['.jsx', '.js'] }],
    'import/prefer-default-export': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'global-require': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    cammelcase: 'off',
    'no-console': ['error', { allow: ['tron'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
};
