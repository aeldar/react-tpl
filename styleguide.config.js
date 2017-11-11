const path = require('path');

module.exports = {
  components: 'src/**/components/**/[A-Z]*.{ts,tsx}',
  ignore: [
    '**/__tests__/**',
    '**/*.test.ts',
    '**/*.test.tsx',
    '**/*.spec.ts',
    '**/*.spec.tsx'
  ],
  propsParser: require('react-docgen-typescript').withDefaultConfig().parse,
  webpackConfig: require('./config-overrides')(require('react-scripts/config/webpack.config.dev.js'), process.env.NODE_ENV),
  require: [
    path.join(__dirname, 'src/index.css')
  ]
};
