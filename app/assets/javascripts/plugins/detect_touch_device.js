(function($){

  $.isTouchDevice = function (data) {
    return 'ontouchstart' in window // works on most browsers
        || 'onmsgesturechange' in window; // works on ie10
  }

})(jQuery);
