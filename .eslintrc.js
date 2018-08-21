module.exports = {
  root: false,
  extends: [
    'plugin:vue-libs/recommended',
    'plugin:jest/recommended'
  ],
  rules: {
    indent: ['error', 2, { MemberExpression: 'off' }]
  }
}
