define(function(){
  
  function isValid(data){
    var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return regex.test(data);
  }

  return {
    isValid: isValid
  };

});
