module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true
  },
  extends: ['prettier', 'prettier/standard', 'plugin:vue/essential'],
  plugins: ['vue', 'prettier'],
  rules: {
    indent: ['error', 2]
  }
  // extends: ['plugin:vue/essential'],
  // rules: {
  //     'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  //     'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  //     indent: ['error', 4]
  //     //'prettier/prettier': 'error',
  // },
};
