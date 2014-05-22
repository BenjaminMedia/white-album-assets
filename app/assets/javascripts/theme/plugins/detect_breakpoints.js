(function($){

  var Breakpoint = function(element, options) {
    // make the options variables available globally within the module
    this.options  = $.extend({}, Breakpoint.DEFAULTS, options);

    this.bindEvent();
  }

  //Plugin defaults
  Breakpoint.DEFAULTS = {
      xs : 480,
      sm : 768,
      md : 992,
      lg : 1200
  }

  Breakpoint.prototype.bindEvent = function() {
    //Use var self if necessary to manage this-references
    var self       = this,
        breakpoint = 'xs';

    breakpoint = self.detect($( window ).width());

    return breakpoint;
  }

  Breakpoint.prototype.detect = function(width){
    var o = this.options;

    if( o.lg < width){
      return 'lg';
    }

    if( o.md <= width && o.lg >= width ){
      return 'md';
    }
    if( o.sm < width && o.md > width ){
      return 'sm';
    }

    if( o.sm > width ){
      return 'xs';
    }
  }

  //Omits fn so that the function doesn't need to be applied to an object
  $.breakpoints = function (data) {
    var $object = new Breakpoint(this);
    return $object.bindEvent(data);
  }

})(jQuery);
