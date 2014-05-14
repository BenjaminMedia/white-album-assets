(function($){

  $.fn.matchHeight = function ($target) {
      var contentHeight = this.height();
      return $target.css('height', contentHeight + 'px');
  }

})(jQuery);



