define(['jquery', 'modules/emailValidator'], function($, emailValidator){

  function init(){
    elements = getElements();
    setupTriggers(elements);
  }

  function getElements(){
    return {
      formDemo : $('[data-js="form-demo"]'),
      fieldEmail : $('[data-js="field-email"]', this.formDemo),
      btnSubmit : $('[data-js="btn-submit"]', this.formDemo),
      alert : $('[data-js="alert"]')
    }
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
    alert.text('').removeClass('cp-alert-error cp-alert-success').addClass('is-hidden');
    if(!emailValidator.isValid(data))
      alert.addClass('cp-alert-error').text(MSG_ERROR).removeClass('is-hidden');
    else
      alert.addClass('cp-alert-success').text(MSG_SUCCESS).removeClass('is-hidden');
  }

  return {
    init: init
  };
  
});
