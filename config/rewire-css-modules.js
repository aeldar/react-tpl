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

const cssLoaderMatcher = rule => rule.loader && rule.loader.indexOf(`css-loader`) !== -1;

// hardcoded search
const getCssRuleParent = (config, env) => config.module.rules[1];
const getCssRule = (config, env) => getCssRuleParent(config, env).oneOf[2];
const cssLoaderOptions = (oldOptions, env) => Object.assign({}, oldOptions, {
  modules: true,
  localIdentName: 'production' === env ? '__[hash:base64:8]' : '[name]__[local]___[hash:base64:5]',
});
const getList = rule => rule.use || rule.loader;

// TODO refactor. Add sourcemaps to all.
module.exports = function override(config, env) {

  const getCssModuleRuleParent = {
    test: /\.module\.css$/,
    use: getList(getCssRule(config, env)).map(rule => (
        rule.loader.indexOf('css-loader') !== -1 ? Object.assign({}, rule, { options: cssLoaderOptions(rule.options, env)}) : rule
      )
    ),
  };

  getCssRuleParent(config).oneOf.unshift(getCssModuleRuleParent);

  return config;
};
