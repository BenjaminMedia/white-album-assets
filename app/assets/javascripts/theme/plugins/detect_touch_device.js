(function($){

  $.isTouchDevice = function (data) {
    if('ontouchstart' in window ||
       'onmsgesturechange' in window ||
       /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
    {
      return true;
    } else {
      return false;
    }
  }

})(jQuery);
