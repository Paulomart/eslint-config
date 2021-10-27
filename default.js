module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import-newlines',
    'import',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    'import/no-unresolved': 'error',
    'no-null/no-null': 'off',
    'arrow-body-style': 'off',
    '@typescript-eslint/consistent-type-assertions': ['error', {
      assertionStyle: 'as',
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'import-newlines/enforce': ['error', {
      items: 3,
    }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'multiline-ternary': ['error', 'always-multiline'],
    'key-spacing': ['error', { beforeColon: false }],
    'semi-spacing': 'error',
    'semi': ['error', 'always'],
    'brace-style': ['error', '1tbs'],
    'no-multi-spaces': ['error'],
    'array-bracket-spacing': ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
    'computed-property-spacing': ['error', 'never'],
    'quote-props': ['error', 'consistent-as-needed'],
    'space-in-parens': ['error', 'never'],
    'quotes': ['error', 'single'],
    'keyword-spacing': 'error',
    'space-infix-ops': ['error'],
    'template-curly-spacing': 'error',
    '@typescript-eslint/explicit-function-return-type': ['error', {
      allowExpressions: true,
      allowTypedFunctionExpressions: true,
      allowHigherOrderFunctions: true,
      allowDirectConstAssertionInArrowFunctions: false,
      allowConciseArrowFunctionExpressionsStartingWithVoid: false,
    }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'property',
        format: ['camelCase'],
      },
      {
        selector: 'class',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        prefix: ['I'],
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        prefix: ['T'],
      },
      {
        selector: 'memberLike',
        modifiers: ['private', 'public', 'protected'],
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
      },
      {
        selector: [
          'classProperty',
          'typeProperty',
          'classMethod',
          'objectLiteralMethod',
          'typeMethod',
          'accessor',
          'enumMember',
        ],
        modifiers: ['destructured', 'requiresQuotes'],
        format: null,
      },
      {
        selector: [
          'objectLiteralProperty',
        ],
        format: ['PascalCase', 'camelCase'],
      },
    ],
    'indent': ['error', 2, { offsetTernaryExpressions: false }],
    'block-spacing': 'error',
    'prefer-template': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/ban-ts-ignore': 'off',
    'no-console': [
      2,
      {
        allow: [
          'warn',
          'error',
          'log',
        ],
      },
    ],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".js"]
    },
    "import/resolver": {
      "node": {
        "extensions": [".ts", ".js"]
      }
    }
  },
  overrides: [
    {
      files: [
        '**/*.spec.ts',
      ],
      env: {
        mocha: true,
      },
    },
  ],
};
