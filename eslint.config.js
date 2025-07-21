import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  {
    ignores: [
      'dist/',
      'build/',
      '*.config.js',
      '*.config.ts',
      '*.config.mjs',
      '*.config.cjs',
      'vite.config.*',
      'eslint.config.*',
      'tailwind.config.*',
      'tsconfig*.json',
      'package.json',
      'package-lock.json',
      'yarn.lock',
      'pnpm-lock.yaml',
      '.prettierrc*',
      '.editorconfig',
      'components.json',
      'postcss.config.*',
      'node_modules/',
      '.env*',
      '.vscode/',
      '.git/',
      '*.log',
      '.DS_Store',
      // Ignorar componentes de ShadCN/UI generados
      'src/components/ui/**',
    ],
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // Enforce single quotes
      'quotes': ['error', 'single'],

      // Enforce semicolons
      'semi': ['error', 'always'],

      // Enforce tab indentation
      'indent': ['error', 'tab'],

      // Prohibit usage of 'any' type
      '@typescript-eslint/no-explicit-any': 'error',

      // Additional TypeScript strict rules
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-inferrable-types': 'off',

      // React specific rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
])
