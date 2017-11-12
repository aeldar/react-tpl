React Tpl
=========

[![Build Status](https://travis-ci.org/aeldar/react-tpl.svg?branch=master)](https://travis-ci.org/aeldar/react-tpl)
[![Build status](https://ci.appveyor.com/api/projects/status/868g6c6or0i92wib?svg=true)](https://ci.appveyor.com/project/aeldar/react-tpl)
[![Coverage Status](https://coveralls.io/repos/github/aeldar/react-tpl/badge.svg)](https://coveralls.io/github/aeldar/react-tpl)
[![Dependencies Status](https://david-dm.org/aeldar/react-tpl.svg)](https://david-dm.org/aeldar/react-tpl)
[![NSP Status](https://nodesecurity.io/orgs/aeldar/projects/38334832-6ccd-44dc-8155-503b371a74d8/badge)](https://nodesecurity.io/orgs/aeldar/projects/38334832-6ccd-44dc-8155-503b371a74d8)
[![Greenkeeper badge](https://badges.greenkeeper.io/aeldar/react-tpl.svg)](https://greenkeeper.io/)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Additions
---------

* [ ] ~~[ESLint](https://eslint.org/)~~ TSLint
  * [ ] set up damn cruel rules
* [ ] ~~[Flow](https://flow.org/en/docs/react/)~~ (damn slow; shitty IDE support)
* [x] [TypeScript](https://www.typescriptlang.org/)
* [x] [Styleguidist](https://react-styleguidist.js.org/)
  * [ ] ~~[Snapguidist](https://github.com/styleguidist/snapguidist) - Styleguidist snapshot testing~~ (no [CI testing yet](https://github.com/styleguidist/snapguidist/issues/16))
* [ ] ~~Storybook~~
* [ ] ~~Storybook Jest Snapshot testing~~
* [x] [HMR](https://github.com/facebookincubator/create-react-app/issues/2317) (Hot Module Reload)
* [ ] [RHL](http://gaearon.github.io/react-hot-loader/) (React Hot Reload), [differences](https://github.com/facebookincubator/create-react-app/issues/1063)
* [ ] Runtime environment variables (as opposed to build time env vars through `process.env`)
* [ ] [CSS Modules](https://github.com/css-modules/css-modules) - for `*.module.css` CSS files.
  * [x] patch webpack config
  * [ ] add exclusions paths for everything outside src, and for src/styles
  * [x] add minification
* [ ] add source maps for CSS development
* [x] ~~[CSSNext](http://cssnext.io/)~~ (see branch [feature/cssnext](https://github.com/aeldar/react-tpl/tree/feature/cssnext))
* [ ] [browserhistory](https://github.com/ai/browserslist) for postcss (cssnext, autoprefixer et c.)
* [ ] Example code
  * [x] Statefull component example
  * [x] Stateless component example
  * [x] MaterialUI example
  * [ ] MaterialUI with theme
  * [ ] Redux
  * [ ] GraphQL
* [ ] Redux, because there is nothing better than that
* [ ] GraphQL client
* [x] [Material UI v1](https://material-ui-next.com/)
* [x] [Normalize.css](https://necolas.github.io/normalize.css/)
* [x] Babel plugins
  * [x] [babel-plugin-lodash](https://github.com/lodash/babel-plugin-lodash)
* [ ] Other dependencies
  * [x] [recompose](https://github.com/acdlite/recompose) - A React utility belt for function components and higher-order components.
  * [x] [classnames](https://github.com/JedWatson/classnames) - A simple javascript utility for conditionally joining classNames together.
