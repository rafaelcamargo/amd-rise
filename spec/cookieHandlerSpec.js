define(['cookieHandler'], function(cookieHandler) {

  describe('Cookie Handler', function(){

    var COOKIE_KEY;

    beforeEach(function(){
      COOKIE_KEY = 'name';
    });

    afterEach(function(){
      document.cookie = COOKIE_KEY + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    });

    it('should properly set a cookie value with an expiration period', function(){
      cookieHandler.set(COOKIE_KEY, 'rafael', 10)
      expect(document.cookie.indexOf('rafael') > -1).toEqual(true);
    });

    it('should properly set a cookie value without an expiration period', function(){
      cookieHandler.set(COOKIE_KEY, 'almir')
      expect(document.cookie.indexOf('almir') > -1).toEqual(true);
    });

    it('should properly get a cookie value', function(){
      var cookieValue;
      cookieHandler.set(COOKIE_KEY, 'mario', 10);
      cookieValue = cookieHandler.get(COOKIE_KEY);
      expect(cookieValue).toEqual('mario');
    });

    it('should properly remove a cookie', function(){
      var cookie;
      cookieHandler.set(COOKIE_KEY, 'lucas', 10);
      cookieHandler.remove(COOKIE_KEY);
      cookie = cookieHandler.get(COOKIE_KEY);
      expect(cookie).toEqual(undefined);
    });

    it('should properly list all cookies as a plain object', function(){
      var cookies;
      cookieHandler.set('color', 'green', 10);
      cookieHandler.set('fruit', 'apple', 10);
      cookieHandler.set('drink', 'beer', 10);
      cookies = cookieHandler.get();

      expect(cookies.color).toEqual('green');
      expect(cookies.fruit).toEqual('apple');
      expect(cookies.drink).toEqual('beer');

      cookieHandler.remove('color');
      cookieHandler.remove('fruit');
      cookieHandler.remove('drink');
    });

  });

});
