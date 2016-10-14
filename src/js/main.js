(function(require){

  var LIBS_PATH = '/dist/js/libs/';

  var config = {
    paths: {
      'jquery': LIBS_PATH + 'jquery.min'
    }
  };

  require.config(config);

}(require));
