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

const middle = function(array) {
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    let halfwayPoint = array.length / 2 - 1;
    return [array[halfwayPoint], array[halfwayPoint + 1]];
  } else {
    let halfwayPoint = Math.floor(array.length/2);
    return [array[halfwayPoint]];
  }
}

console.log(middle(['a']));
console.log(middle(['a','b']));
console.log(middle(['a','b','c']));
console.log(middle(['a','b','c','d']));
console.log(middle(['a','b','c','d','e']));
console.log(middle(['a','b','c','d','e','f']));