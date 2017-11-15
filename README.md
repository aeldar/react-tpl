React Tpl
=========

[![Build Status](https://travis-ci.org/aeldar/react-tpl.svg?branch=master)](https://travis-ci.org/aeldar/react-tpl)
[![Build status](https://ci.appveyor.com/api/projects/status/868g6c6or0i92wib?svg=true)](https://ci.appveyor.com/project/aeldar/react-tpl)
[![Coverage Status](https://coveralls.io/repos/github/aeldar/react-tpl/badge.svg)](https://coveralls.io/github/aeldar/react-tpl)
[![Dependencies Status](https://david-dm.org/aeldar/react-tpl.svg)](https://david-dm.org/aeldar/react-tpl)
[![NSP Status](https://nodesecurity.io/orgs/aeldar/projects/38334832-6ccd-44dc-8155-503b371a74d8/badge)](https://nodesecurity.io/orgs/aeldar/projects/38334832-6ccd-44dc-8155-503b371a74d8)
[![Greenkeeper badge](https://badges.greenkeeper.io/aeldar/react-tpl.svg)](https://greenkeeper.io/)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app), without ejecting!
[react-app-rewired](https://github.com/timarney/react-app-rewired) was used to patch CRA _webpack/babel/other staff_ configuration.

Additions
---------

* [x] [TypeScript](https://www.typescriptlang.org/)
* [x] [TSLint](https://palantir.github.io/tslint/)
* [x] [Styleguidist](https://react-styleguidist.js.org/)
  * [ ] ~~[Snapguidist](https://github.com/styleguidist/snapguidist) - Styleguidist snapshot testing~~ (no [CI testing yet](https://github.com/styleguidist/snapguidist/issues/16))
* [ ] ~~[Storybook](https://storybook.js.org/)~~
  * [ ] ~~[StoryShots](https://github.com/storybooks/storybook/tree/master/addons/storyshots) [Jest Snapshot testing](https://storybook.js.org/testing/structural-testing/)~~
* [x] [HMR](https://github.com/facebookincubator/create-react-app/issues/2317) (Hot Module Reload)
* [ ] [RHL](http://gaearon.github.io/react-hot-loader/) (React Hot Reload), [differences](https://github.com/facebookincubator/create-react-app/issues/1063)
* [ ] Runtime environment variables (as opposed to build time env vars through `process.env`), see [12 Factor Apps, config](https://12factor.net/config)
* [x] [CSS Modules](https://github.com/css-modules/css-modules) - for `*.module.css` CSS files.
* [x] Source maps for CSS always enabled until `GENERATE_SOURCEMAP=false` env set.
* [x] ~~[CSSNext](http://cssnext.io/)~~ (see branch [feature/cssnext](https://github.com/aeldar/react-tpl/tree/feature/cssnext))
* [ ] [browserhistory](https://github.com/ai/browserslist) for postcss (cssnext, autoprefixer et c.)
* [ ] [Redux](https://redux.js.org/), because there is nothing better than that
* [ ] [GraphQL](http://graphql.org/) client
* [x] [Material UI v1](https://material-ui-next.com/)
* [x] [Normalize.css](https://necolas.github.io/normalize.css/)
* [ ] [Docker](https://www.docker.com/)
* [x] [Babel](https://babeljs.io/) [plugins](https://babeljs.io/docs/plugins/)
  * [x] [babel-plugin-lodash](https://github.com/lodash/babel-plugin-lodash)
* [ ] Other dependencies
  * [x] [recompose](https://github.com/acdlite/recompose) - A React utility belt for function components and higher-order components.
  * [x] [classnames](https://github.com/JedWatson/classnames) - A simple javascript utility for conditionally joining classNames together.
* [ ] Example code
  * [x] Statefull component example
  * [x] Stateless component example
  * [x] MaterialUI example
  * [ ] MaterialUI with theme
  * [ ] Redux
  * [ ] GraphQL
