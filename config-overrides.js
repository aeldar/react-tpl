/**
 * Override CRA webpack configs.
 * @param config
 * @param env
 * @returns {*}
 */

const { compose } = require('react-app-rewired');
const rewireCSSModules = require('./config/rewire-css-modules');
const rewireTypescript = require('./config/rewire-typescript');
// const {inspect} = require('util');


module.exports = compose(
  rewireCSSModules,
  rewireTypescript
);
