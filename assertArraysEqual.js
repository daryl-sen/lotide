const assertArraysEqual = function(actual, expected) {
  if (actual.length !== expected.length) {
    return console.log(`❌️ Assertion Failed: ${actual} !== ${expected}`);
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return console.log(`❌️ Assertion Failed: ${actual} !== ${expected}`);
      }
    }
    return console.log(`👍️ Assertion Passed: ${actual} === ${expected}`);
  }
};




assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, "2", 3]);
assertArraysEqual([1, 2, 3], [1, "2", 3]);
assertArraysEqual([1, 2, 3], [1, 2]);
assertArraysEqual([1, 2, 3], []);