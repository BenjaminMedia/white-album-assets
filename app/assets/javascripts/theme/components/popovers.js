(function($){

  // See the Bootstrap documentation on how to use popovers:
  // http://getbootstrap.com/javascript/#popovers

  $(document).on('page:change', function(){

    var $popover       = $('[data-toggle="popover"]'),
        $htmlPopover   = $('[data-toggle="html-popover"]');

    //This enables the standard popover with attributes applied through Bootstraps data-attributes
    if($popover.length) {
      $popover.popover();
    }

    //This enables the popover with html-content
    if( $htmlPopover.length) {
      $htmlPopover.on('click', function(e) {
        e.preventDefault();
      });

      $htmlPopover.popover({
          html:true,
          placement:'bottom',
          content:function(){
              return $($(this).data('contentwrapper')).html();
          }
      });
    }

  });
})(jQuery);
