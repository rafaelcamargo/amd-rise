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
      dialog : $('[data-js="dialog"]')
    }
  }

  function setupTriggers(elements){
    elements.formDemo.on('submit', function(evt){
      evt.preventDefault();
      validateEmail(elements.dialog, elements.fieldEmail.val());
    });
  }

  function validateEmail(dialog, data){
    var msgError = 'Please, use a valid email address...';
    var msgSuccess = 'Very good!';
    dialog.text('').removeClass('cp-alert-error cp-alert-success').addClass('is-hidden');
    if(!emailValidator.isValid(data))
      dialog.addClass('cp-alert-error').text(msgError).removeClass('is-hidden');
    else
      dialog.addClass('cp-alert-success').text(msgSuccess).removeClass('is-hidden');
  }

  return {
    init: init
  };
  
});
