(function(){

  $(document).on('ready page:load', function () {
    var $image = $('[data-target="image-adjust"]');

    if( $image.length ){
      $image.adjustImage();
    }
  })

})(jQuery);
