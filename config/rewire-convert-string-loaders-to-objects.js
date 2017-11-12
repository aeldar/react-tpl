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

const ruleListPatcher = (rules) => {
  rules.forEach((rule, ind, arr) => {
    if (typeof rule === 'string') {
      arr[ind] = { loader: rule };
    }
    if (rule.use && typeof rule.use === 'string') {
      rule.use = [{ loader: rule.use }]
    }
    if (rule.use && Array.isArray(rule.use)) {
      ruleListPatcher(rule.use);
    }
    if (rule.oneOf) {
      ruleListPatcher(rule.oneOf);
    }
    if(Array.isArray(rule.loader)) {
      ruleListPatcher(rule.loader);
    }
  })
};

module.exports = function override(config, env) {

  ruleListPatcher(config.module.rules);

  return config;
};
