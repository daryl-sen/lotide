const tail = require('../tail');
const assert = require('chai').assert.deepEqual;

describe('tail.js', () => {
  it('returns [5,6,7] when the input is [4,5,6,7]', () => {
    let input = [4,5,6,7];
    let expected = [5,6,7];
    assert(tail(input), expected);
  });

  it('returns ["Lighthouse", "Labs"] when the input is ["Hello", "Lighthouse", "Labs"]', () => {
    let input = ["Hello", "Lighthouse", "Labs"];
    let expected = ["Lighthouse", "Labs"];
    assert(tail(input), expected);
  });

  it('returns [] when the input is []', () => {
    let input = [];
    let expected = [];
    assert(tail(input), expected);
  });
});