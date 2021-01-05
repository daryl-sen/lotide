const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// check to see if the target is within an array
const checkItem = function(target, array) {
  for (let item of array) {
    if (item === target) {
      return false;
    }
  }
  return true;
};

const without = function(source, itemsToRemove) {
  let output = [];
  for (let item of source) {
    if (checkItem(item, itemsToRemove)) {
      output.push(item);
    }
  }
  return output;
};



// test without function
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without([1, 2, 3], [1])); // output [2, 3]
console.log(without([1, 2, 3, 4, 5], [1, 3, 5])); // output [2, 4]
console.log(without([1, 2, "3", 4, 5], [1, 3, 5])); // output [2. "3", 5] because "3" is not the same as 3
console.log(without([1, 2, 3, 4, 5], [1, "3", 5])); // output [2, 3, 4]