
/*
How to use:

Requires IE-class-identifiers on <html> to enable fallback

options:  position (sets position in percent according to container)
speed:    Transition speed in seconds (set to 0 to disable)
x:        True/false (Determines the axis - if set to false transitions moves on the y-axis)

Example:
$('.class-name').appSlide({position:100, speed: 0.2, x: true});

*/

(function($){
  // 'use strict'; 
  var AppSlide = function(element, options) {
    this.$obj    = $(element);
    this.options = options;
    this.init();
  }
  
  AppSlide.DEFAULTS = {
      x: true,
      position: 100,
      speed: 0.2
  }
  
  AppSlide.prototype.init = function() {
    var pos,
        tSpeed = {
      'transition' : ' transform ' + this.options.speed + 's linear',
      '-webkit-transition' : '-webkit-transform ' + this.options.speed + 's linear',
      '-moz-transition' : '-moz-transform ' + this.options.speed + 's linear',
      '-webkit-backface-visibility' : 'hidden'
    };

    var isIE9 = $('html').hasClass('ie9'),
        isIE8 = $('html').hasClass('ie8'),
        isIE7 = $('html').hasClass('ie7');

    if (isIE7 || isIE8 || isIE9) {
      if(this.options.x) {
        this.$obj.css('margin-left', this.options.position + '%');
      } else {
        this.$obj.css('margin-top', this.options.position + '%');
      }
    } else {
      if(this.options.x) {
        pos = '' + this.options.position + '%,0,0';
      } else{
        pos = '0,' + this.options.position + '%,0';
      }
      var dirRes = {
        'transform' : 'translate3d(' + pos + ')',
        '-webkit-transform' : 'translate3d(' + pos + ')',
        '-moz-transform' : 'translate3d('+pos+')'
      };
      
      this.$obj.css(tSpeed).css(dirRes);
    }
  }

  $.fn.appSlide = function (option) {
    
    return this.each(function () {
      var $this = $(this),
          data  = $this.data('wa.appslide'),
          options = $.extend({}, AppSlide.DEFAULTS, $this.data(), typeof option == 'object' && option);
      
      data = new AppSlide(this, options)
    })
  }

  $.fn.appSlide.Constructor = AppSlide
})(jQuery);
