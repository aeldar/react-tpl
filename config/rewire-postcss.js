// const { getLoader } = require('react-app-rewired');

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

module.exports = function override(config, env) {
  const shouldUseSourceMap =
    'development' === env || ('production' === env && process.env.GENERATE_SOURCEMAP !== 'false');

  const loader = getLoader(config.module.rules, postcssLoaderMatcher);
  const oldPlugins = loader.options.plugins;
  loader.options = Object.assign({}, loader.options, {
    sourceMap: shouldUseSourceMap,
    plugins: () => ([
      require('postcss-import'), // we need this as neither cssnext understands imports, nor webpack helps it
      require('postcss-cssnext')({
        features: {
          autoprefixer: false, // no need, as autoprefixer is used by postcss itself
        }
      }),
      ...oldPlugins(),
    ]),
  });

  return config;
};
