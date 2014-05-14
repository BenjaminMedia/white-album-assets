describe("Detect touch device", function() {

  it("is defined", function() {
    expect($.isTouchDevice).toBeDefined;
  });

  it("returns true if the function returns a boolean", function() {

    var isBoolean = false;

    if($.isTouchDevice() === true || $.isTouchDevice() === false){
      isBoolean = true;
    }

    expect(isBoolean).toBe(true);
  });

});
