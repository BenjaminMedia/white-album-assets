describe("Extract suffix from filename", function() {

  it("is defined", function() {
    expect($.extractSuffix).toBeDefined;
  });

  it("returns the suffix when provided with a file name string", function() {
    expect($.extractSuffix('file.png')).toEqual('png');
  });

});
