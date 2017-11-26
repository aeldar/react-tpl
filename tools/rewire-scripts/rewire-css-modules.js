/*
* 1. Find existed CSS rule.
* 2. Create a CSSModules rule based on it (copy content by reference except for the css-loader!).
* 3. Insert it before CSS rule.
* */

const { ruleChildren } = require('./helpers');

const cssRuleMatcher = rule => rule.test && rule.test.toString() === /\.css$/.toString();

// returns a triplet with parent rule, css rule, and index of css rule inside parent rule.
const findCssRuleAndParentList = (rules) => {
  return rules.reduce((acc, curr, ind) => {
    if (acc.length) {
      return acc;
    }
    if (cssRuleMatcher(curr)) {
      return [rules, curr, ind];
    }
    return findCssRuleAndParentList(ruleChildren(curr));
  }, []);
};

const withCssModulesOptions = (options, env) => Object.assign({}, options, {
  modules: true,
  localIdentName: 'production' === env ? '__[hash:base64:8]' : '[name]__[local]___[hash:base64:5]',
});

module.exports = function override(config, env) {

  const [parent, css, index] = findCssRuleAndParentList(config.module.rules);

  const cssModulesRule = {
    test: /\.module\.css$/,
    use: ruleChildren(css).map(rule => (
        rule.loader.indexOf('css-loader') !== -1
          ? Object.assign({}, rule, { options: withCssModulesOptions(rule.options, env) })
          : rule
      )
    )
  };

  parent.splice(index, 0, cssModulesRule);

  return config;
};
