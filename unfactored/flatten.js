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


const flatten = function(array) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let item of array[i]) {
        output.push(item);
      }
    } else {
      output.push(array[i]);
    }
  }
  console.log(output);
};


flatten([1, 2, [3, 4], 5, [6]]);