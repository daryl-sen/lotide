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
      console.log('array', array[i]);
    } else {
      console.log(array[i]);
    }
  }
}


// const flatten = function(array) {
//   let output = [];
//   for (let item of array) {
//     if (Array.isArray(array)) {
      
//       console.log('array', item);
//       // for (let subitem of item) {
//       //   output.push(subitem);
//       // }
//     } else {
//       console.log(item);
//       // output.push(item);
//     }
//   }
//   console.log(output);
// };


// console.log(Array.isArray([1,2,3][0]));

flatten([1, 2, [3, 4], 5, [6]]);