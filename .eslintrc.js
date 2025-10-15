//file .eslintrc.js

module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    'prefer-const': 'off',
    '@typescript-eslint/prefer-const': 'off'
  },
  ignoreDuringBuilds: true
};