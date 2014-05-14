$(document).on('ready page:load', function (){
  var Issuu = (function() {
    return {
      init: function(){

        if($('.issuu').length){
          this.initIssuu();
        }
      },
      initIssuu: function(){
        $.getScript('//e.issuu.com/embed.js');
      },
    }
  })();
  Issuu.init();
});
