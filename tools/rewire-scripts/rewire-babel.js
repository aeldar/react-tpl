const { compose, injectBabelPlugin } = require('react-app-rewired');

const babelPluginLodash = (config, env) =>
  'production' === env ? injectBabelPlugin('babel-plugin-lodash', config) : config;

// const otherBabelPlugin = (config, env) =>
//   'production' === env ? injectBabelPlugin('other-babel-plugin', config) : config;

module.exports = compose(
  // otherBabelPlugin,
  babelPluginLodash
);
