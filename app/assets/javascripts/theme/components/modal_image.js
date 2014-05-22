(function($){

  var s = {};

  function ImageObject($obj){
    this.imageOrigin = $obj;
    this.imagePath   = $obj.data('image-lg');
  }

  ImageObject.prototype.initModal = function(){

    var $body            = $('body'),
        $modalContainer  = $('.js-modal-container'),
        $imageContainer  = $('.js-modal-image'),
        self             = this;

    //create modal container if it doesn't exist
    if(!$modalContainer.length){

      $body.append( '<div class="modal fade js-modal-container">' +
                      '<div class="modal-dialog modal-lg">' +
                        '<div class="modal-image">' +
                          '<div class="close" data-dismiss="modal" aria-hidden="true">' +
                            '<i class="fa fa-times"></i>' +
                          '</div>' +
                          '<div class="js-modal-image"></div>' +
                        '</div>' +
                      '</div>' +
                    '</div>');

      //resave dom after template is loaded
      $modalContainer  = $('.js-modal-container'),
      $imageContainer  = $('.js-modal-image');
    }

    //remove loader if it exists and add new load-spinner
    $('.js-modal-loader').remove();
    $body.append('<div class="load-wheel fixed-center js-modal-loader" style="color: white"></div>');

    //Insert image path into template
    $imageContainer.html('<img src="' + this.imagePath  + '" alt="expanded image">');

    var $image = $('.js-modal-image img');

    //Init modal-plugin
    $modalContainer.modal({
      backdrop : true,
      keyboard : true
    });

    //Hide image while it loads
    $image.addClass('invisible').load(function(){
      $this = $(this);

      //show image after Bootstrap's fade has finished
      setTimeout(function(){
        $('.js-modal-loader').fadeOut();
        $this.removeClass('invisible');
        self.aspectScale($this);
       },400);
    });
  }

  ImageObject.prototype.aspectScale = function($image){
    //Calculate dimensions of window and image and scale accordingly

    if($(window).isPortrait() || !$image.isPortrait()){
      $image.css({
        'width'     : '90%',
        'height'    : 'auto'
      });

    }else{
      var winHeight = $(window).height();

      $image.css({
        'height' : winHeight - 100 + 'px',
        'width'  : 'auto'
      });
    }
  }

  $.fn.modalImage = function() {
    var $obj = new ImageObject(this);
    return $obj.initModal();
  }

})(jQuery);

//Init plugin for clicks on elements with the data-toggle
$(document).on('click', '[data-toggle="modal-image"]', function(){
  $(this).modalImage();
});
