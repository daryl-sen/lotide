const words = ["ground", "control", "to", "major", "tom"];

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




const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// const results1 = map(words, word => word[0]);



assertArraysEqual(map(words, word => word[0]), ['g','c','t','m','t']);
assertArraysEqual(map(["yeet", "moot", "c", "a"], word => word[0]), ['y','m','c','a']);
assertArraysEqual(map(["123", "321", "456", "654"], word => word[0]), ['1','3','4','6']);






