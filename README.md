# amd-rise
amd-rise is a minimal AMD application. Its content has only the minimum conditions to start code an app: jQuery, RequireJS, and automated tasks to watch and update *.js* and *.styl* files.

[![CircleCI](https://circleci.com/gh/rafaelcamargo/amd-rise.svg?style=svg)](https://circleci.com/gh/rafaelcamargo/amd-rise)

## Requirements
To run this project, you need Nodejs installed in your system.

## Installation
```
git clone git@github.com:rafaelcamargo/amd-rise.git
cd amd-rise
npm install -g grunt-cli karma-cli
npm install
grunt start
open http://localhost:9000
```

## Base structure

```
index.html
src
|-- js
|-- |-- main.js
|-- |-- shared
|-- |-- |-- emailValidator.js
|-- |-- views
|-- |-- |-- demo.js
|-- styl
|-- |-- _mixins.styl
|-- |-- _variables.styl
|-- |-- alert.styl
|-- |-- button.styl
|-- |-- modifiers.styl
|-- |-- native.styl
spec
|-- main.js
|-- shared
|-- |-- emailValidatorSpec.js
|-- views
|-- |-- demoSpec.js
```
