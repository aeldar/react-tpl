/**
 * Override CRA webpack configs.
 * @param config
 * @param env
 * @returns {*}
 */

const { compose } = require('react-app-rewired');
const rewireCSSModules = require('./config/rewire-css-modules');
const rewirePostcss = require('./config/rewire-postcss');
const rewireTypescript = require('./config/rewire-typescript');
const rewireBabel = require('./config/rewire-babel');
const rewireCssSourcemaps = require('./config/rewire-css-sourcemaps');
const convertStringLoadersToObjects = require('./config/rewire-convert-string-loaders-to-objects');
const debugRules = require('./config/rewire-debug-print-rules');

module.exports = compose(
  // debugRules, // print rules and kill

  rewireCssSourcemaps, // should run after all css related rewiring!
  rewireCSSModules,
  // rewirePostcss,
  rewireTypescript,
  rewireBabel,
  convertStringLoadersToObjects
);
