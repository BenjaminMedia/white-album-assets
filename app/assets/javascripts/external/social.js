$(document).on('ready page:load', function (){

  var Social = (function() {

    return {
      init: function(){

        if($('[data-facebook]').length){
          this.initFacebook();
        }
        if($('[data-pinterest="pinit_button"]').length){
          this.initPinterest();
        }
        if($('[data-linkedin="share_button"]').length){
          this.initLinkedin();
        }
        if($('[data-twitter="share_button"]').length){
          this.initTwitter();
        }
      },

      initFacebook: function(){
        var appId = $('[data-facebook]').data('app-id');
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=" + appId;
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      },

      initPinterest: function(){
        $.getScript('//assets.pinterest.com/js/pinit.js');
      },

      initLinkedin: function(){
        var $linkedin =  $('[data-linkedin="share_button"]'),
            url       =  $linkedin.data('social-url');
        $.getScript('//platform.linkedin.com/in.js');
        $linkedin.html('<script type="IN/Share" data-url="' + url + '" data-counter="right"></script>');
      },

      initTwitter: function(){
        !function(d,s,id){
          var js, fjs = d.getElementsByTagName(s)[0];
          if(!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js,fjs);
          }
        }(document,"script","twitter-wjs");
      }
    }
  })();

  Social.init();

});
