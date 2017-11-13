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
