const {inspect} = require('util');

const getLoader = function(rules, matcher) {
  let loader;

  rules.some(rule => {
    return loader = matcher(rule)
      ? rule
      : getLoader(rule.use || rule.oneOf || (Array.isArray(rule.loader) && rule.loader) || [], matcher);
  });

  return loader;
};

const cssLoaderMatcher = rule => rule.loader && rule.loader.indexOf(`css-loader`) !== -1;

module.exports = function override(config, env) {
  let l = getLoader(config.module.rules, cssLoaderMatcher);
  l.options = Object.assign({}, l.options, {
    modules: true,
    localIdentName: 'production' === env ? '__[hash:base64:8]' : '[name]__[local]___[hash:base64:5]',
  });

  return config;
};
