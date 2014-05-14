$(function(){

  // This is the default needed to make the tooltip work.
  // You control the tool tip through the following:
  //
  // data-toggle="tooltip" - needed for the tooltip to work.
  // data-placement="left" - controls the placement of the tooltip.
  // data-original-title="Tooltip on left" - content that is displayed.

  $('[data-toggle="tooltip"]').tooltip();

  // Ypu can also add options, that can be found on the documentation page:
  // http://getbootstrap.com/javascript/#tooltips
  // like this:
  //
  // $('.js-tooltip').tooltip({
  //   animated : 'fade',
  //   placement : 'left'
  // });

});
