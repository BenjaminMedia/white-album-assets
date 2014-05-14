$(function(){
  
  // This is the default needed to make the tooltip work.
  // yYou control the tool tip through the following:
  //
  // data-container="body" - needed for the popover to work.
  // data-toggle="popover" - needed for the popover to work.
  // data-placement="left" - controls the placement of the popover.
  // data-original-title="popover title" - content that is displayed as the popover title.
  // data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." - content in the popover
  
  $('[data-toggle="popover"]').popover();
  
  // Ypu can also add options, that can be found on the documentation page:
  // http://getbootstrap.com/javascript/#popovers
  
  // For popovers with html content, use this
  
  $(document).on('ready page:load', function(){
    if( $('[data-toggle="html-popover"]').length) {
      
      $('[data-toggle="html-popover"]').on('click', function(e) {
        e.preventDefault();
      });
      
      $('[data-toggle="html-popover"]').popover({
          html:true,
          placement:'bottom',
          content:function(){
              return $($(this).data('contentwrapper')).html();
          }
      });
      
    }
  });
});
