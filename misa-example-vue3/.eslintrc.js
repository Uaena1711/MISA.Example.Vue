module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    quotes: [
      2,
      'single',
      {
        avoidEscape: true
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: 'css',
        args: 'all'
      }
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true
      }
    ],
    'no-var': 'error',
    'prefer-const': 2,
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore'
      }
    ],
    'no-array-constructor': 'error',
    'no-new-object': 'error',
    'no-bitwise': 'error',
    'no-redeclare': 2,
    'no-proto': 2,
    'no-invalid-regexp': 2,
    'vue/script-indent': ['error', 2],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'space-before-function-paren': [2, 'never'],
    'no-new': 0,
    'no-implied-eval': 0,
    'handle-callback-err': 0,
    'no-extend-native': 0,
    indent: ['error', 2, { SwitchCase: 1 }],
    semi: [2, 'always'],
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: ['pre', 'textarea', 'span']
      }
    ],
    'no-tabs': 0,
    // 'vue/singleline-html-element-content-newline': [
    //   'error',
    //   {
    //     ignoreWhenNoAttributes: true,
    //     ignoreWhenEmpty: true,
    //     ignores: ['pre', 'textarea', 'span']
    //   }
    // ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'space-before-function-paren': 'off',
    'func-call-spacing': 'off',
    'comma-dangle': 'off',
    'semi': 'off',
    'eol-last':'off',
    'vue/html-indent':'off',
    'vue/no-multiple-template-root':'off'
  },

  globals: {
    console: true,
    alert: true,
    document: true,
    __dirname: true,
    require: true,
    window: true,
    process: true,
    module: true,
    define: true,
    _: true,
    Promise: true,
    setTimeout: true,
    clearTimeout: true,
    mount: true,
    clearInterval: true,
    setInterval: true,
    $: false,
    MutationObserver: false,
    Map: false,
    localStorage: true
  }
}
