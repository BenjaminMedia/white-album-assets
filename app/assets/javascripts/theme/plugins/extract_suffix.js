(function($){

  $.extractSuffix = function (filename) {
    var suffix = filename ? filename.substr( (filename.lastIndexOf('.') +1) ) : 'null' ;
    return suffix;
  }

})(jQuery);


