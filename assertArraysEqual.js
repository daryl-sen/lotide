const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
    return true;
  }
};


const assertArraysEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqArrays(actual, expected)) {
    console.log(`👍️ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};




assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, "2", 3]);
assertArraysEqual([1, 2, 3], [1, "2", 3]);
assertArraysEqual([1, 2, 3], [1, 2]);
assertArraysEqual([1, 2, 3], []);