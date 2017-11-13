const { createLoaderMatcher } = require('./helpers');

const cssLoaderMatcher = createLoaderMatcher('css-loader');

// hardcoded search
const getCssRuleParent = (config, env) => config.module.rules[1];
const getCssRule = (config, env) => getCssRuleParent(config, env).oneOf[2];
const cssLoaderOptions = (oldOptions, env) => Object.assign({}, oldOptions, {
  modules: true,
  localIdentName: 'production' === env ? '__[hash:base64:8]' : '[name]__[local]___[hash:base64:5]',
});
const getList = rule => rule.use || rule.loader;

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
