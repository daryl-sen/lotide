const head = require('../head');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns 5 for [5,6,7]", () => {
    const expected = 5;
    const input = [5,6,7];
    assert.strictEqual(head(input), expected); 
  });

  it('returns "Hello" for ["Hello", "Lighthouse", "Labs"]', () => {
    const expected = "Hello";
    const input = ["Hello", "Lighthouse", "Labs"];
    assert.strictEqual(head(input), expected); 
  });

  it("returns undefined if the input is an empty array", () => {
    const expected = undefined;
    const input = [];
    assert.strictEqual(head(input), expected); 
  });

});

