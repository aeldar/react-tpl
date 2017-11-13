const { createLoaderMatcher, gatherLoaders } = require('./helpers');

const matchers = [
  createLoaderMatcher('postcss-loader'),
  createLoaderMatcher('css-loader'),
  createLoaderMatcher('style-loader')
];
const check = rule => matchers.some(matcher => matcher(rule));

module.exports = function override(config, env) {
  const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

  gatherLoaders(config.module.rules, check).forEach(
    loader => loader.options = Object.assign({}, loader.options, { sourceMap: shouldUseSourceMap })
  );

  return config;
};
