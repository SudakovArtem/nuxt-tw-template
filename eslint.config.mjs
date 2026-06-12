import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  eslintPluginPrettierRecommended,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'class-methods-use-this': 'off',
      'comma-dangle': ['error', 'never'],
      'import/first': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
          pathGroups: [
            { pattern: 'vue', group: 'external', position: 'before' },
            { pattern: 'pinia', group: 'external', position: 'before' },
            { pattern: 'swiper', group: 'external', position: 'after' },
            { pattern: 'swiper/**', group: 'external', position: 'after' },
            { pattern: '@', group: 'internal', position: 'before' },
            { pattern: '@/**', group: 'internal', position: 'before' },
            { pattern: '@app', group: 'internal', position: 'before' },
            { pattern: '@app/**', group: 'internal', position: 'before' },
            { pattern: '@assets', group: 'internal', position: 'before' },
            { pattern: '@assets/**', group: 'internal', position: 'before' },
            { pattern: '@shared', group: 'internal', position: 'before' },
            { pattern: '@shared/**', group: 'internal', position: 'before' },
            { pattern: '@uikit', group: 'internal', position: 'before' },
            { pattern: '@uikit/**', group: 'internal', position: 'before' },
            { pattern: '@base', group: 'internal', position: 'before' },
            { pattern: '@base/**', group: 'internal', position: 'before' }
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          },
          'newlines-between': 'never'
        }
      ],
      'import/prefer-default-export': 'off',
      semi: ['error', 'never'],
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off'
    }
  }
])
