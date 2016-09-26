# amd-rise
amd-rise is a minimal AMD application. Its content has only the minimum conditions to start code an app: jQuery, RequireJS, and automated tasks to watch and update *.js* and *.styl* files.

[![Code Climate](https://codeclimate.com/github/rafaelcamargo/amd-rise/badges/gpa.svg)](https://codeclimate.com/github/rafaelcamargo/amd-rise) [![Test Coverage](https://codeclimate.com/github/rafaelcamargo/amd-rise/badges/coverage.svg)](https://codeclimate.com/github/rafaelcamargo/amd-rise/coverage) [![CircleCI](https://circleci.com/gh/rafaelcamargo/amd-rise.svg?style=svg)](https://circleci.com/gh/rafaelcamargo/amd-rise)

## Requirements
To run this project, you need Nodejs installed in your system.

## Installation
```
git clone git@github.com:rafaelcamargo/amd-rise.git
cd amd-rise
npm install -g grunt-cli karma-cli
npm install
grunt build
grunt start
open http://localhost:9000
```

## Base structure

```
index.html
src
|-- js
|-- |-- main.js
|-- |-- modules
|-- |-- |-- emailValidator.js
|-- |-- pages
|-- |-- |-- demo.js
|-- styl
|-- |-- alert.styl
|-- |-- button.styl
|-- |-- functions.styl
|-- |-- input.styl
|-- |-- native.styl
|-- |-- states.styl
|-- |-- variables.styl
spec
|-- main.js
|-- modules
|-- |-- emailValidatorSpec.js
|-- pages
|-- |-- demoSpec.js
```
