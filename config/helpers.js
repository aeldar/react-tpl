const path = require('path');

const ruleChildren = rule =>
  rule.use || rule.oneOf || (Array.isArray(rule.loader) && rule.loader) || [];

/**
 * Given a rule, return if it uses a specific loader.
 */
const createLoaderMatcher = loader => rule =>
  rule.loader && rule.loader.indexOf(`${path.sep}${loader}${path.sep}`) !== -1;

const gatherLoaders = (rules, checkFn) =>
  rules.reduce((acc, curr) => (
    checkFn(curr) ? [...acc, curr] : [...acc, ...gatherLoaders(ruleChildren(curr), checkFn)]
  ), []);

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

module.exports = {
  ruleChildren,
  createLoaderMatcher,
  gatherLoaders,
  getLoader
};
