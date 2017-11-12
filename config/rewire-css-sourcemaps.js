// const { getLoader } = require('react-app-rewired');
const { inspect } = require('util');

// custom getLoader instead of react-ap-rewired's one, to implement proper loader search inside
// ExtractTextPlugin.extract() plugin.
// (Array.isArray(rule.loader) && rule.loader) added for this purpose.
const getLoader = function(rules, matcher) {
  let loader;

  rules.some(rule => {
    return loader = matcher(rule)
      ? rule
      : getLoader(rule.use || rule.oneOf || (Array.isArray(rule.loader) && rule.loader) || [], matcher);
  });

  return loader;
};

const postcssLoaderMatcher = rule => rule.loader && rule.loader.indexOf(`postcss-loader`) !== -1;
const cssLoaderMatcher = rule => rule.loader && rule.loader.indexOf(`css-loader`) !== -1;
const styleLoaderMatcher = rule => rule.loader && typeof rule.loader === 'string' && rule.loader.indexOf(`style-loader`) !== -1;
const matchers = [postcssLoaderMatcher, cssLoaderMatcher, styleLoaderMatcher];

module.exports = function override(config, env) {
  const shouldUseSourceMap =
    'development' === env || ('production' === env && process.env.GENERATE_SOURCEMAP !== 'false');

  matchers.forEach(matcher => {
    const loader = getLoader(config.module.rules, matcher);
    console.log(matcher.name);
    loader.options = Object.assign({}, loader.options, {
      sourceMap: shouldUseSourceMap,
    })
  });

  return config;
};
