// const assertEqual = require('./assertEqual');
// const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = without;



// // test without function
// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"]));
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// console.log(without([1, 2, 3], [1])); // output [2, 3]
// console.log(without([1, 2, 3, 4, 5], [1, 3, 5])); // output [2, 4]
// console.log(without([1, 2, "3", 4, 5], [1, 3, 5])); // output [2. "3", 5] because "3" is not the same as 3
// console.log(without([1, 2, 3, 4, 5], [1, "3", 5])); // output [2, 3, 4]