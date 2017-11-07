/**
 * Based on https://github.com/lwd-technology/react-app-rewire-typescript
 */

const fs = require('fs');
const path = require('path');
const {getLoader, getBabelLoader} = require('react-app-rewired');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const FORK_TS_CHECKER_PLUGIN_OPTIONS = {
  tslint: true,
};

const TS_LOADER_OPTIONS_DEFAULTS = {
  // disable type checker - we will use it in fork plugin
  transpileOnly: true,
}

function rewireTypescript(config, env, typescriptLoaderOptions = TS_LOADER_OPTIONS_DEFAULTS) {
  // Monkey patch react-scripts paths to use just `src` instead of
  // `src/index.js` specifically. Hopefully this can get removed at some point.
  // @see https://github.com/facebookincubator/create-react-app/issues/3052
  let paths = require('react-scripts/config/paths');
  if (paths) {
    paths.appIndexJs = path.resolve(fs.realpathSync(process.cwd()), 'src')
  }

  // Add Typescript files to automatic file resolution for Webpack.
  config.resolve.extensions = (config.resolve.extensions || []).concat([
    '.web.ts',
    '.ts',
    '.tsx'
  ]);

  // Add Typescript as an exception to the file-loader defaults.
  const fileLoader = getLoader(
    config.module.rules,
    rule =>
      rule.loader &&
      typeof rule.loader === 'string' &&
      rule.loader.includes(`${path.sep}file-loader${path.sep}`)
  );
  fileLoader.exclude.push(/\.tsx?$/);

  // Add Typescript to the loader rules, using a copy of the existing Babel
  // configs.
  const babelLoader = getBabelLoader(config.module.rules);

  let babelOptions = babelLoader.options;

  // Add React Hot Loader 3 (RHL) to babel options. Uncomment to use.
  // (Don't forget to adapt index.tsx fro that, see https://github.com/gaearon/react-hot-loader )
  // babelOptions = 'development' === env
  //   ? Object.assign({} , babelLoader.options,
  //     { plugins: [...babelLoader.options.plugins || [], 'react-hot-loader/babel'] })
  //   : babelOptions;

  const typescriptRules = {
    test: /\.tsx?$/,
    use: [
      {loader: babelLoader.loader, options: babelOptions},
      {loader: 'ts-loader', options: typescriptLoaderOptions}
    ]
  };
  config.module.rules.push(typescriptRules);

  // Change the hardcoded `index.js` to just `index`, so that it will resolve as
  // whichever file is available. The use of `fs` is to handle things like
  // symlinks.
  config.entry = config.entry
    .slice(0, config.entry.length - 1)
    .concat([path.resolve(fs.realpathSync(process.cwd()), 'src/index')]);

  // Add React Hot Loader 3 entry point (RHL) as the very first item. Uncoment to use.
  // config.entry = 'development' === env
  //   ? ['react-hot-loader/patch', ...config.entry] : config.entry;

  // Add fork-ts-checker-webpack-plugin plugin
  config.plugins.push(new ForkTsCheckerWebpackPlugin(FORK_TS_CHECKER_PLUGIN_OPTIONS));

  return config;
}

module.exports = rewireTypescript;
