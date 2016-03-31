# Starter kit for single page app

### Demo

[http://yannickbochatay.github.io/JSYG-starterkit/](http://yannickbochatay.github.io/JSYG-starterkit/)



### Features

* ES6 and JSX with [Babel](https://babeljs.io/)

* [Less](http://lesscss.org/) and [Sass](http://sass-lang.com/) support.

* Code quality with [ESLint](http://eslint.org/)

* smart auto-build and reload with [WebPack](https://webpack.github.io/)

* easy imports from [bower](http://bower.io/) components and [npm](https://www.npmjs.com/) packages.

* [React](https://facebook.github.io/react/) components

* [React-router](https://github.com/reactjs/react-router/) with dynamic loading for [huge apps](https://github.com/reactjs/react-router/tree/master/examples/huge-apps)

* Testing environment with [Karma](https://karma-runner.github.io/) and [Jasmine](http://jasmine.github.io/)

* [Material-ui](http://www.material-ui.com/#/)



### Prerequisites
* [NodeJS](https://nodejs.org/en/) installed



### Installation

* download and extract [zip](https://github.com/YannickBochatay/JSYG-starterkit/archive/master.zip)

* move to directory JSYG-starterkit-master

* enter command
```shell
npm install
```
It can takes several minutes


### Get started
```shell
npm start
```
Build app (in memory) and launch the dev-server with hot reload.
You have to open your browser and go to *http://localhost:8080/*.


```shell
npm test
```
Run tests with Karma and Jasmine. All files with *.test.js* or *.test.jsx* extension inside *src/* directory will be executed, with hot reload.

```shell
npm run build-dev
```
Build app (in builds/ folder) for development

```shell
npm run build-prod
```
Build app (in builds/ folder) for production (clean, optimize, minify)



### Warning
If your app is not in the web-root folder (ex : *http://myDomain.fr/myApp/* instead of *http://myDomain.fr/* ) you'll have to change the *publicPath* property in *webpack.config.js* (ex : *publicPath : "/myApp/builds/"* instead of *publicPath : "/builds/"*).



### Install new dependencies

##### with npm
```shell
npm install --save jquery
```

##### or bower if you prefer
```shell
bower install --save jquery
```

##### in your code
```javascript
import $ from "jquery"

$("<div>").appendTo("body");
```

That's it.
