define(['jquery', 'pages/demo'],function($, demo){

  var form, fieldEmail, alert;

  beforeEach(function(){
    var fixtures =  '<div class="cp-alert is-hidden" data-js="alert"></div>' +
                    '<form data-js="form-demo">' +
                      '<label>Email:</label>' +
                      '<input type="text" data-js="field-email"/>' +
                      '<button type="submit" data-js="btn-submit">' +
                        'Validate' +
                      '</button>' +
                    '</form>';
    setFixtures(fixtures);
    form = $('[data-js="form-demo"]');
    fieldEmail = $('[data-js="field-email"]');
    alert = $('[data-js="alert"]');
    demo.init();
  });

  it('should show error alert when an invalid email address is submitted', function(){
    var MSG_ERROR = 'Please, use a valid email address...';
    var INVALID_EMAIL = 'test@invalid';
    
    fieldEmail.val(INVALID_EMAIL);
    form.trigger('submit');

    expect(alert.hasClass('is-hidden')).toEqual(false);
    expect(alert.hasClass('cp-alert-error')).toEqual(true);
    expect(alert.text()).toEqual(MSG_ERROR);
  });

  it('should show success alert when a valid email address is submitted', function(){
    var MSG_SUCCESS = 'Very good!';
    var VALID_EMAIL = 'test@valid.com';

    fieldEmail.val(VALID_EMAIL);
    form.trigger('submit');

    expect(alert.hasClass('is-hidden')).toEqual(false);
    expect(alert.hasClass('cp-alert-success')).toEqual(true);
    expect(alert.text()).toEqual(MSG_SUCCESS);
  });
  
});
