define('shared/emailValidator', function(){

  'use strict';

  var _public = {};

  _public.isValid = function(emailAddress){
    var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return regex.test(emailAddress);
  };

  return _public;

});
