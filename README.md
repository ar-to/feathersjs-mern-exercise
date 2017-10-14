# feathersjs-mern-exercise
This exercise demonstrated various technologies, tools and practices for using feathersjs, react, redux, socket.io and redux-saga

## Sources

This repo goes over setting up tools, frameworks and config files from scratch. It uses the following articles as reference:

- react setup : https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel

or 

https://www.codementor.io/goodnesskay/setting-up-react-with-webpack-3-0-yarn-and-babel-9ftd5phqz

## Tools used

- https://yarnpkg.com/en/
- https://babeljs.io

## Steps & Commands

### environment variables and config files

`$ yarn init`

`$ yarn add webpack webpack-dev-server`

Configure webpack using docs. Add basic entry and output keys/value pairs in the webpack.config.js and then add the babel loaders. Best go get familiar with the documentations for each tool before making the files.

`$ touch webpack.config.js`

Add [Html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin#configuration) to inject js scripts and create index.html; see options for details

Add [webpack-dev-server](https://webpack.js.org/guides/development/#using-webpack-dev-server) to create a local server and live reloading; Tell it where to serve files:

```
devServer: {
    contentBase: './dist'
}
```
running the following command runs webpack config and builds dist:

`$ ./node_modules/.bin/webpack --config webpack.config.js`

but an npm script saves this

`"build": "webpack"`

to run build plus webpack-dev-server and have it open browser

`"start": "webpack && webpack-dev-server --open"`


install babel loaders and presets. Check babel docs for updated info of presets to use
`yarn add babel-loader babel-core babel-preset-env babel-reset-react`

create and configure babel config to use presets

`$ touch .babelrc`

```
{
    "presets": [
        "env",
        "react"
    ]
}
```

Add npm scripts to facilitate commands inside package.json; 

```
  "scripts": {
    "start": "webpack && webpack-dev-server --open",
    "build": "webpack"
  },
```

### Client : React

```

$ mkdir client
$ cd client
$ touch index.js
$ touch index.html
$ cd ..

```

Add [boilerplate markup](https://github.com/ar-to/semantic-html5/blob/master/index.html) to client/index.html; make sure to replace the body with:

`<main id="root"/main

```
mkdir ./client/components
touch ./client/components/App.js
```







