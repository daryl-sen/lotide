const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = assertArraysEqual;


// flatten([1, 2, [3, 4], 5, [6]]);