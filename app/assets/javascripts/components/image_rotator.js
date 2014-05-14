/*
Initializes the flexslider.js plugin...

How to use:

Add data-toggle="rotator" to a div containing a <ul> with the following structure:

  <div data-toggle="rotator">
    <ul>
      <li>
        <figure>
          <figcaption>
          </figcaption>
        </figure>
      </li>
    </ul>
  </div>
*/

(function(){

  var ImageRotator = (function() {
    var s;
    return {
      init: function(settings){
        s = settings;

        var self = this;

        this.makeSlideshow(function(){
            self.adjustHeights();
            self.checkWinResize();
        });

      },
      makeSlideshow: function(callback){
        var self       = this,
            count      = s.$rotator.length,
            loaded     = 0,
            $customNav = '';

        s.$rotator.find('ul').addClass('slides');

        s.$rotator.each(function(){
          console.log('make rotator');
          var $this       = $(this),
              customNav   = $this.data('custom-nav');
              $customNav  = $('.' + customNav).find('li');

          $this.flexslider({
            namespace: "rotator-",
            animation : "slide",
            controlNav: true,
            directionNav: true,
            prevText: '<i class="fa fa-chevron-circle-left"></i>',
            nextText: '<i class="fa fa-chevron-circle-right"></i>',
            manualControls: $customNav,
            useCSS: false,
            controlNav: true,
            slideshowSpeed: 5000,
            start: function(){
              loaded ++;
              if(loaded === count){
                callback();
              }
            }
          });
        });

      },
      checkWinResize: function(){
        var self = this;

        $(window).on('resize', function(){
          self.adjustHeights();
        });
      },
      adjustHeights: function(){
        var self = this;

        s.$rotator.each(function(){
          var $this     = $(this),
              $figure   = $this.find('.rotator-viewport figure'),
              $arrows   = $this.find('.rotator-direction-nav li'),
              minHeight = 100000000;

          $figure.css('height' ,'auto');

          $this.find('.slides li').each(function(){

            var height = $(this).height();

            height < minHeight ? minHeight = height : null;

          });

          var offset = 1 * minHeight / 2 -30;

          $figure.css('height' , minHeight + 'px');

          $arrows.show().css('margin-top', offset + 'px');

          customNav = $this.data('custom-nav');
          $('.' + customNav).css('height' , minHeight + 'px');

        });
      }
    }
  })();

  function ready(){
    $rotator = $('[data-toggle="rotator"]');

    if($rotator.length){
      ImageRotator.init({
        $rotator     : $rotator,
        windowLoaded : false
      });
    }
  }
  $(document).on('ready page:load', ready);
})(jQuery);
