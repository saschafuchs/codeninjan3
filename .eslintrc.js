module.exports = {
  env: {
    'vue/setup-compiler-macros': true,
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  rules: {
    semi: 'error',
    'import/namespace': 'off',
    'no-use-before-define': 'off',
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 'off',
    'node/no-deprecated-api': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-unused-components':
      process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/multiline-html-element-content-newline':
      process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-trailing-spaces':
      process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/no-unused-vars': 'off',
    'object-curly-spacing': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'comma-dangle': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/script-setup-uses-vars': 'error',
    'vue/no-mutating-props': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/no-v-html': 'off',
    'no-case-declarations': 'off',
    camelcase: 'off',
    curly: 0,
    'dot-notation': 0,
    'nuxt/no-cjs-in-config': 'off',
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: {
          max: 2
        },
        multiline: {
          max: 1
        }
      }
    ]
  }
}
