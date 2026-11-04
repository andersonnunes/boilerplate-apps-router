import js from '@eslint/js'
import nextConfig from 'eslint-config-next/core-web-vitals'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import react from 'eslint-plugin-react'
import prettierConfig from 'eslint-config-prettier/flat'

const eslintConfig = [
  {
    ignores: ['.next/**', 'build/**', 'coverage/**', 'node_modules/**']
  },
  js.configs.recommended,
  ...nextConfig,
  ...tsPlugin.configs['flat/recommended'],
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module'
    }
  },
  react.configs.flat.recommended,
  {
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
  },
  prettierConfig
]

export default eslintConfig
