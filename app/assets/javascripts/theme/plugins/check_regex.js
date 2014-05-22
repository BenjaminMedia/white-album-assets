//Wrap inside anonymous function to preserve scope and jQuery context
(function($){

  var s = {
    hasNumber       : /[0-9]/,
    onlyNumbers     : /^[0-9]+$/,
    onlyLetters     : /^[a-zA-ZÆØÅæøåÖÄöä\-\.\s]+$/,
    hasLetters      : /[a-zA-ZÆØÅæøåÖÄöä]/,
    isEmail         : /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    isImage         : /(gif|jpg|jpeg|png)$/i,
    onlySpaces      : /^\s+$/
  };

  $.checkRegex = function (pattern, string) {
    switch(pattern)
    {
    case 'numberIncluded':
      return string.match(s.hasNumber) ? true : false;
      break;
    case 'onlyNumbers':
      return string.match(s.onlyNumbers) ? true : false;
      break;
    case 'onlyLetters':
      return string.match(s.onlyLetters) ? true : false;
      break;
    case 'hasLetters':
      return string.match(s.hasLetters) ? true : false;
      break;
    case 'isEmail':
      return string.match(s.isEmail) ? true : false;
      break;
    case 'isImage':
      return string.match(s.isImage) ? true : false;
      break;
    case 'onlySpaces':
      return string.match(s.onlySpaces) ? true : false;
      break;
    default:
      return false;
    }
  }

})(jQuery);
