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


module.exports = compose(
  rewireCSSModules,
  rewirePostcss,
  rewireTypescript,
  rewireBabel
);
