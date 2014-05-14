(function($){

  $.fn.isPortrait = function() {

    var height = this.height(),
        width  = this.width();

    return height > width ? true : false;

  }

})(jQuery);
