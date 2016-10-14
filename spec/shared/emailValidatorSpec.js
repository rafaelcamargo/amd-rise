define(['shared/emailValidator'],function(emailValidator) {

  describe('Email Validator', function(){

    it('should be true when email address is valid', function(){
      var validEmail = 'test@valid.com';
      expect(emailValidator.isValid(validEmail)).toEqual(true);
    });

    it('should be false when email address is invalid', function(){
      var invalidEmail = 'test@invalid';
      expect(emailValidator.isValid(invalidEmail)).toEqual(false);
    });

  });

});
