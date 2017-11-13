const path = require('path');

const ruleChildren = rule =>
  rule.use || rule.oneOf || (Array.isArray(rule.loader) && rule.loader) || [];

/**
 * Given a rule, return if it uses a specific loader.
 */
const createLoaderMatcher = loader => rule =>
  rule.loader && rule.loader.indexOf(`${path.sep}${loader}${path.sep}`) !== -1;

const postcssLoaderMatcher = createLoaderMatcher('postcss-loader');
const cssLoaderMatcher = createLoaderMatcher('css-loader');
const styleLoaderMatcher = createLoaderMatcher('style-loader');

const matchers = [postcssLoaderMatcher, cssLoaderMatcher, styleLoaderMatcher];
const check = rule => matchers.some(matcher => matcher(rule));

const gatherLoaders = rules =>
  rules.reduce((acc, curr) => (
    check(curr) ? [...acc, curr] : [...acc, ...gatherLoaders(ruleChildren(curr))]
  ), []);

module.exports = function override(config, env) {
  const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

  gatherLoaders(config.module.rules).forEach(loader =>
    loader.options = Object.assign({}, loader.options, {
      sourceMap: shouldUseSourceMap,
    })
  );

  return config;
};
