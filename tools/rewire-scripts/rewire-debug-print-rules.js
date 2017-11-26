const { inspect } = require('util');

module.exports = (config, env) => {
  // console.log(JSON.stringify(config.module.rules, null, 2));
  console.log(inspect(config.module.rules, false, 7, true));
  process.exit(1);
  return config;
};
