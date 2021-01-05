const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌️ Assertion Failed: ${actual} !== ${expected}`);
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // TRUE
assertEqual(eqArrays([1, 2, 3], [1, "2", 3]), true); // FALSE
assertEqual(eqArrays([1, 2, 3], [1, "2", 3]), false); // TRUE
assertEqual(eqArrays([1, 2, 3], [1, 2]), true); // FALSE
assertEqual(eqArrays([1, 2, 3], []), true); // FALSE