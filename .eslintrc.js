const camelCaseExceptions = [
];

module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
    'jest/globals': true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:security/recommended',
  ],
  globals: {
    NodeJS: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: [
    'jest',
    'security',
    'sort-keys-fix',
  ],
  rules: {
    '@typescript-eslint/ban-types': [2],
    '@typescript-eslint/explicit-function-return-type': [2],
    '@typescript-eslint/explicit-module-boundary-types': [2],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        filter: {
          match: false,
          regex: camelCaseExceptions.join('|'),
        },
        format: ['camelCase'],
        selector: 'default',
      },
      {
        format: null,
        selector: 'interface',
      },
      {
        format: null,
        selector: 'property',
      },
      {
        format: null,
        selector: 'parameter',
      },
      {
        format: null,
        selector: 'typeAlias',
      },
      {
        format: null,
        selector: 'variable',
      },
      {
        format: null,
        selector: 'class',
      },
      {
        format: null,
        selector: 'typeParameter',
      },
      {
        format: null,
        selector: 'enum',
      },
      {
        format: null,
        selector: 'enumMember',
      },
    ],
    '@typescript-eslint/no-explicit-any': [2],
    'comma-dangle': [2, 'always-multiline'],
    'eol-last': [2, 'always'],
    'import/default': [0],
    'import/extensions': [2, {
      json: 'always', // Always require .json extensions
      ts: 'never', // Never require .ts extensions
    },
    ],
    'import/no-named-as-default': [0],
    'import/no-named-as-default-member': [0],
    'import/prefer-default-export': [0],
    indent: [2, 2, { SwitchCase: 1 }],
    'jest/no-disabled-tests': [2],
    'jest/no-focused-tests': [2],
    'jest/no-identical-title': [2],
    'jest/prefer-to-have-length': [2],
    'jest/valid-expect': [2],
    'no-param-reassign': [2, {
      ignorePropertyModificationsFor: ['draft'], // for immer
    }],
    quotes: [2, 'single'],
    'security/detect-object-injection': [2],
    'semi': [2],
    'sort-keys-fix/sort-keys-fix': [2],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      // use <root>/tsconfig.json
      typescript: {
        // always try to resolve types under `<roo/>@types`
        // directory even it doesn't contain any source code,
        // like `@types/unist`
        alwaysTryTypes: true,
      },
    },
  },
};
