describe("Detect breakpoints", function() {

  it("is defined", function() {
    expect($.breakpoints).toBeDefined;
  });

  it("returns a string with a breakpoint code", function() {
    expect($.breakpoints()).toEqual(jasmine.any(String));
  });

});
