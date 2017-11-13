/**
 * Override CRA webpack configs.
 * @param config
 * @param env
 * @returns {*}
 */

const { compose } = require('react-app-rewired');
const rewireCSSModules = require('./config/rewire-css-modules');
const rewireTypescript = require('./config/rewire-typescript');
const rewireBabel = require('./config/rewire-babel');
const rewireCssSourcemaps = require('./config/rewire-css-sourcemaps');
const convertStringLoadersToObjects = require('./config/rewire-convert-string-loaders-to-objects');
// const debugRules = require('./config/rewire-debug-print-rules');

module.exports = compose(
  // debugRules, // print rules and kill

  rewireCssSourcemaps, // should run after all css related rewiring!
  rewireCSSModules,
  rewireTypescript,
  rewireBabel,
  convertStringLoadersToObjects // should run before all, because some rewire scripts expect loaders in object format
);
