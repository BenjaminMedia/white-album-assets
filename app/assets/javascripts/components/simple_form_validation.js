(function($){

  var noErrors;

  function Form($obj){
    this.$form = $obj;
  }

  Form.prototype.findPattern = function(){
    var self = this,
        $alert = this.$form.find('[data-toggle="alert-danger"]');

    noErrors = 0;

    $input = this.$form.find('input');

    $alert.html('').addClass('hidden');

    $input.each(function(){
      var $this = $(this);

      if($this.attr('data-regex')){
        var pattern  = $this.data('regex'),
            value    = $this.val(),
            errorMsg = $this.data('error-msg');

        self.checkPattern(pattern, value, errorMsg);

      };
    });

    $select = this.$form.find('select');

    $select.each(function(){
      var $this = $(this);

      if($this.attr('data-regex')){
        var pattern  = $this.data('regex'),
            value    = $this.find('option:selected').val(),
            errorMsg = $this.data('error-msg');

        self.checkPattern(pattern, value, errorMsg);

      };
    });

    if(noErrors == 0){
      self.submitForm();
    }

  };

  Form.prototype.checkPattern = function(pattern, value, errorMsg){
    var self = this;

    switch(pattern){
      case 'phone':
        if($.checkRegex('onlyNumbers', value) && value.length == 8){}else{
          self.appendError(errorMsg);
        }
        break;
      case 'name':
        if(!$.checkRegex('onlyLetters', value)){
          self.appendError(errorMsg);
        }
        break;
      case 'email':
        if(!$.checkRegex('isEmail', value)){
          self.appendError(errorMsg);
        }
        break;
      case 'is-adult':
        var thisYear = new Date().getFullYear(),
            age      = thisYear - value;

        if(age < 18){
          self.appendError(errorMsg);
        }

        break;
      case 'is-adult-alt':
        var bool = JSON.parse(value);
        if(!bool){
          self.appendError(errorMsg);
        }
        break;
      default:
    }

  };

  Form.prototype.submitForm = function(){
    this.$form.submit();
  };

  Form.prototype.appendError = function(errorMsg){
    var $form = this.$form,
        $alert = $form.find('[data-toggle="alert-danger"]');

    $form.addClass('js-has-errors');

    $alert.append('<p>' + errorMsg + '</p>');

    $alert.removeClass('hidden');

    noErrors++;

  };

  //make plugin globally available
  return $.fn.validateInputs = function() {
    var $obj = new Form(this);
    return $obj.findPattern();
  }

})(jQuery);

$(document).on('click', '[data-toggle="check-regex"]', function(e){
  e.preventDefault();

  $(this).closest('form').validateInputs();

});
