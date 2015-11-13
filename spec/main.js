(function(window, require){

  // A bunch of constants
  var BASE_PATH = '/base'; // Karma serves files from '/base'
  var BASE_ASSETS_PATH = BASE_PATH + '/assets';
  var BASE_SCRIPTS_PATH = BASE_PATH + '/src/js/';
  var BASE_SCRIPTS_LIBS_PATH = BASE_ASSETS_PATH + '/js/libs/';

  // Store spec files
  var specs = [];
  for (var file in window.__karma__.files) {
    if (/Spec\.js$/.test(file))
      specs.push(file);
  }

  var config = {
    baseUrl: BASE_SCRIPTS_PATH,

    // Ask Require.js to load these files (all our specs)
    deps: specs,
    
    // Path for not Require modules like libs
    paths: {
      'jquery': BASE_SCRIPTS_LIBS_PATH + 'jquery.min'
    },

    // start test run, once Require.js is done
    callback: window.__karma__.start
  };


  requirejs.config(config);

})(window, require);
