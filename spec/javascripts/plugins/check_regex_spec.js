describe("Check regex", function() {

  it("is defined", function() {
    expect($.checkRegex).toBeDefined;
  });

  it("returns true when a string with a number is sent to numberIncluded", function() {
    expect($.checkRegex('numberIncluded', 'test1')).toBe(true);
    expect($.checkRegex('numberIncluded', 'test')).toBe(false);
  });

  it("returns true when only numbers are sent to onlyNumbers", function() {
    expect($.checkRegex('onlyNumbers', '1234')).toBe(true);
    expect($.checkRegex('onlyNumbers', 'abcd1234')).toBe(false);
  });


  it("returns true when only letters are sent to onlyLetters", function() {
    expect($.checkRegex('onlyLetters', 'abcd')).toBe(true);
    expect($.checkRegex('onlyLetters', 'abcd1234')).toBe(false);
  });


  it("returns true when a valid email is sent to isEmail", function() {
    expect($.checkRegex('isEmail', 'test@test.dk')).toBe(true);
    expect($.checkRegex('isEmail', 'test')).toBe(false);
  });

  it("returns true when a valid image-name is sent to isImage", function() {
    expect($.checkRegex('isImage', 'test.jpg')).toBe(true);
    expect($.checkRegex('isImage', 'test.png')).toBe(true);
    expect($.checkRegex('isImage', 'test.gif')).toBe(true);
    expect($.checkRegex('isImage', 'test.tiff')).toBe(false);
    expect($.checkRegex('isImage', 'test1234')).toBe(false);
  });

  it("returns true when only spaces are sent to onlySpaces", function() {
    expect($.checkRegex('onlySpaces', ' ')).toBe(true);
    expect($.checkRegex('onlySpaces', 'aaa')).toBe(false);
    expect($.checkRegex('onlySpaces', 'a   ')).toBe(false);
  });
});
