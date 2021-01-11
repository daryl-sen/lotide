
const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual');


// test without function
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without([1, 2, 3], [1])); // output [2, 3]
console.log(without([1, 2, 3, 4, 5], [1, 3, 5])); // output [2, 4]
console.log(without([1, 2, "3", 4, 5], [1, 3, 5])); // output [2. "3", 5] because "3" is not the same as 3
console.log(without([1, 2, 3, 4, 5], [1, "3", 5])); // output [2, 3, 4]