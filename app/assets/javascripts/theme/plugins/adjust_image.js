(function($){

  var s = {};

  function ImageObject($image){
    this.$image = $image;
  }

  ImageObject.prototype.adjust = function(){
    var $image     = this.$image,
        isPortrait = $image.isPortrait();

    if(isPortrait) {
      $image.addClass('adjust-image-width');

      var parentHeight = $image.parent().height(),
          imageHeight  = $image.height(),
          offset = -1 * (imageHeight - parentHeight) / 2;

      $image.css('margin-top', offset );
    } else {
      $image.addClass('adjust-image-height');

      var parentwidth = $image.parent().width(),
          imageWidth  = $image.width(),
          offset = -1 * (imageWidth - parentwidth) / 2;

      $image.css({ 'margin-left': offset });
    }
  }

  $.fn.adjustImage = function() {
    var $image = new ImageObject(this);
    return $image.adjust();
  }

})(jQuery);
