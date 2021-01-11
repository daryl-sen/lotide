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







const takeUntil = function(array, callback) {
  let output = [];
  for (const item of array) {
    if (!callback(item)) {
      output.push(item);
    } else {
      break;
    }
  }
  return output;
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);