(function(require){

  LIBS_PATH = '/assets/js/libs/';

  var config = {
    shim: {
      'tooltipster': ['jquery']
    },
    paths: {
      'jquery': LIBS_PATH + 'jquery.min'
    }
  };

  require.config(config);

})(require);
