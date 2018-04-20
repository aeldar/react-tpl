/**
 * Override CRA webpack configs.
 * @param config
 * @param env
 * @returns {*}
 */

const { compose } = require('react-app-rewired');
const rewireCSSModules = require('./tools/rewire-scripts/rewire-css-modules');
// const rewireTypescript = require('./tools/rewire-scripts/rewire-typescript');
const rewireTypescript = require('react-app-rewire-typescript');
const rewireBabel = require('./tools/rewire-scripts/rewire-babel');
const rewireCssSourcemaps = require('./tools/rewire-scripts/rewire-css-sourcemaps');
const convertStringLoadersToObjects = require('./tools/rewire-scripts/rewire-convert-string-loaders-to-objects');
// const debugRules = require('./tools/rewire-scripts/rewire-debug-print-rules');

module.exports = compose(
  // debugRules, // print rules and kill

  rewireCssSourcemaps, // should run after all css related rewiring!
  rewireCSSModules,
  rewireTypescript,
  rewireBabel,
  convertStringLoadersToObjects // should run before all, because some rewire scripts expect loaders in object format
);
