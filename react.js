module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    './default',
  ],
  env: {
    es6: true,
    browser: true,
  },
  plugins: [
    'react',
  ],
  rules: {
    'jsx-quotes': [
      'error',
      'prefer-single',
    ],
    'react/jsx-closing-bracket-location': ['error'],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'ignore',
      logical: 'ignore',
      prop: 'ignore',
    }],
    'react/jsx-max-props-per-line': ['error', {
      maximum: 1,
      when: 'multiline',
    }],
    'react/self-closing-comp': 'error',
    'react/prop-types': 'off',
  },
  settings: {
    'react': {
      version: 'detect',
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".js", ".jsx"]
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
};
