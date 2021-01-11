const middle = require('../middle');
const assert = require('chai').assert.deepEqual;

describe('desc', () => {
  it("returns an empty array if the input is ['a']", () => {
    const input = ['a'];
    const expected = [];
    assert(middle(input), expected);
  });

  it("returns an empty array if the input is ['a', 'b']", () => {
    const input = [];
    const expected = [];
    assert(middle(input), expected);
  });

  it("returns ['b'] if the input is ['a', 'b', 'c']", () => {
    const input = ['a', 'b', 'c'];
    const expected = ['b'];
    assert(middle(input), expected);
  });

  it("returns ['b', 'c'] if the input is ['a', 'b', 'c', 'd']", () => {
    const input = ['a', 'b', 'c', 'd'];
    const expected = ['b', 'c'];
    assert(middle(input), expected);
  });

  it("returns ['c'] if the input is ['a', 'b', 'c', 'd', 'e']", () => {
    const input = ['a', 'b', 'c', 'd', 'e'];
    const expected = ['c'];
    assert(middle(input), expected);
  });

  it("returns an empty array if the input is ['a', 'b', 'c', 'd', 'e', 'f']", () => {
    const input = ['a', 'b', 'c', 'd', 'e', 'f'];
    const expected = ['c', 'd'];
    assert(middle(input), expected);
  });

});