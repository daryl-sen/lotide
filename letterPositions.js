// const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  // const noSpaces = sentence.split(" ").join("");
  let output = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] in output) {
      output[sentence[i]].push(i);
    } else {
      output[sentence[i]] = [i];
    }
  }
  // console.log(output);
  return output;
};

module.exports = letterPositions;








// // test drivers
// console.log(letterPositions('hello'));
// console.log(letterPositions('lighthouse in the house'));

// assertArraysEqual(letterPositions("hello").h, [0]);
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").l, [2,3]);
// assertArraysEqual(letterPositions("hello").o, [4]);