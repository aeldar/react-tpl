module.exports = (config, env) => {
  console.log(JSON.stringify(config.module.rules, null, 2));
  process.exit(1);
  return config;
};
