define(['jquery', 'views/demo'],function($, demo){

  describe('Demo Page', function(){

    var form, fieldEmail, alert;

    beforeEach(function(){
      var fixtures =  '<div class="alert is-hidden" data-js="alert"></div>' +
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

    it('should render page without show any alert', function(){
      expect(alert).toBeHidden();
    });

    it('should show error alert when an invalid email address is submitted', function(){
      var MSG_ERROR = 'Please, use a valid email address...';
      var INVALID_EMAIL = 'test@invalid';

      fieldEmail.val(INVALID_EMAIL);
      form.trigger('submit');

      expect(alert).toBeVisible();
      expect(alert).toHaveClass('alert-error');
      expect(alert).toContainText(MSG_ERROR);
    });

    it('should show success alert when a valid email address is submitted', function(){
      var MSG_SUCCESS = 'Very good!';
      var VALID_EMAIL = 'test@valid.com';

      fieldEmail.val(VALID_EMAIL);
      form.trigger('submit');

      expect(alert).toBeVisible();
      expect(alert).toHaveClass('alert-success');
      expect(alert).toContainText(MSG_SUCCESS);
    });

  });


});
