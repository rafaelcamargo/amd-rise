define('views/demo', [
    'jquery',
    'shared/emailValidator'
  ], function($, emailValidator){

    'use strict';

    var _public = {};

    _public.init = function(){
      var elements = getElements();
      setupTriggers(elements);
    };

    function getElements(){
      return {
        formDemo : $('[data-js="form-demo"]'),
        fieldEmail : $('[data-js="field-email"]'),
        btnSubmit : $('[data-js="btn-submit"]'),
        alert : $('[data-js="alert"]')
      };
    }

    function setupTriggers(elements){
      elements.formDemo.on('submit', function(evt){
        evt.preventDefault();
        validateEmail(elements.alert, elements.fieldEmail.val());
      });
    }

    function validateEmail(alert, data){
      var MSG_ERROR = 'Please, use a valid email address...';
      var MSG_SUCCESS = 'Very good!';
      alert.text('').removeClass('alert-error alert-success').addClass('is-hidden');
      if(!emailValidator.isValid(data))
        alert.addClass('alert-error').text(MSG_ERROR).removeClass('is-hidden');
      else
        alert.addClass('alert-success').text(MSG_SUCCESS).removeClass('is-hidden');
    }

    return _public;

});
