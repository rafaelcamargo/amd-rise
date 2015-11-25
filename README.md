# amd-rise
amd-rise is a minimal AMD application. Its content has only the minimum conditions to start code an app: jQuery, RequireJS, and automated tasks to watch and update *.js* and *.styl* files.

## Requirements
To run this project, you need Nodejs installed in your system.

## Installation

git clone git@github.com:rafaelcamargo/amd-rise.git
cd amd-rise
npm install -g grunt-cli karma-cli
npm install
grunt build
grunt start
open http://localhost:9000
```

### Troubleshooting
- If you get `npm: command not found`, make sure you have npm-cli installed in your system. *Nodejs should install it automatically*.
- If you get `grunt: command not found`, make sure npm has successfully installed `grunt-cli`.
- If you get `karma: command not found`, make sure npm has successfully installed `karma-cli`.
