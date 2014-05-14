/*
  Adds a cascading popup effect to a set of targets. Only works with one set of targets per page.

  <div data-effect="cascade-popup">
    <div data-effect="cascade-target"> Target 1 </div>
    <div data-effect="cascade-target"> Target 2 </div>
  </div>
*/

(function(){

  var CascadePopup = (function() {

    var s;

    return {
      init: function($container, $target){
        var self = this;

        $target.hide();
        //Uses interval instead of scroll-listener for performance reasons
        var scrollInterval = setInterval(function() {

          if(self.isScrolledIntoView($container)) {

            $target.each(function(i){
              var $this = $(this);

              setTimeout(function(){
                $this.show().addClass('animated bounceIn');
              },500 + (i * 500));

              clearInterval(scrollInterval);
            });

          }

        }, 3000);

      },
      isScrolledIntoView: function(elem) {
        var docViewTop    = $(window).scrollTop(),
            docViewBottom = docViewTop + $(window).height(),
            elemTop       = $(elem).offset().top,
            elemBottom    = elemTop + $(elem).height();

        return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
          && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
      }

    }
  })();

  $(document).on('ready page:load', function (){
    var $container = $('[data-effect="cascade-popup"]'),
        $target    = $('[data-effect="cascade-target"]');

    if($container.length && ($.breakpoints() == 'md' || $.breakpoints() == 'lg')) {
      CascadePopup.init($container, $target);
    }

  });

})(jQuery);
