describe("Match heights", function() {

  var $origin,
      $target;

  it("is defined", function() {

    expect($('').matchHeight($(''))).toBeDefined;

  });

  it("Measured height on dummy-html after applying method", function() {

    $('body').append('<div class="test-origin" style="height: 100px"></div>' +
                     '<div class="test-target"></div>');

    var $origin = $('.test-origin'),
        $target = $('.test-target');

    $origin.matchHeight($target);

    var targetHeight =  $target.height();

    expect(targetHeight).toEqual(100);
  });

});
