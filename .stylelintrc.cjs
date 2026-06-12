module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order', 'stylelint-prettier/recommended'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'layer',
          'screen',
          'variants',
          'responsive',
          'theme',
          'plugin',
          'config',
          'source',
          'utility',
          'variant'
        ]
      }
    ],
    'no-descending-specificity': null,
    'no-empty-source': null,
    'color-function-notation': 'legacy',
    'color-function-alias-notation': 'with-alpha',
    'declaration-empty-line-before': null,
    'declaration-property-value-no-unknown': null,
    'selector-class-pattern': null,
    'font-family-no-missing-generic-family-keyword': null,
    'media-query-no-invalid': null,
    'no-invalid-position-declaration': null,
    'scss/dollar-variable-pattern': null,
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['unquote', 'floor', 'lighten', 'size-html']
      }
    ],
    'value-keyword-case': [
      'lower',
      {
        ignoreFunctions: ['v-bind']
      }
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep', 'global', 'slotted']
      }
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted']
      }
    ]
  },
  overrides: [
    {
      files: [`*.vue`, `**/*.vue`],
      customSyntax: 'postcss-html'
    },
    {
      /* Tailwind v4 CSS file uses @theme, @plugin, hsl(var()) — relax formatting rules */
      files: ['src/app/assets/styles/tailwind/index.css'],
      rules: {
        'value-keyword-case': null,
        'color-function-alias-notation': null,
        'at-rule-empty-line-before': null,
        'rule-empty-line-before': null,
        'comment-empty-line-before': null
      }
    }
  ]
}
