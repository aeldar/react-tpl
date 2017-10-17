/**
 * Override CRA webpack configs.
 * @param config
 * @param env
 * @returns {*}
 */

const rewireCSSModules = require('./config/rewire-css-modules');
const {inspect} = require('util');


module.exports = function override(config, env) {
  //do stuff with the webpack config...

  config = rewireCSSModules(config, env);

  return config;
};
