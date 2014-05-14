$(document).on('ready page:load', function (){

  var ArticleSwipe = (function() {

    return {
      init: function($swipeContainer){

        var breakpoint = $.breakpoints();

        if(breakpoint == 'xs'){

          $swipeContainer.Swipe().data('Swipe');

          $swipeContainer.eq(0).find('.mobile-swipe').each(function(i) {
            $(this).css('z-index', (100 -1 * i));
          });
        }
      }
    }
  })();

  var $swipeContainer = $('[data-gesture="swipe"]');

  if($swipeContainer.length){
    ArticleSwipe.init($swipeContainer);
  }

});

