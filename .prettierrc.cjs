module.exports = {
  trailingComma: 'es5',
  arrowParens: 'always',
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: ['<THIRD_PARTY_MODULES>', '^[$]', '^[./]'],
  importOrderSeparation: true,
};
