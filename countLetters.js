// const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
  const noSpaces = sentence.split(" ").join("");

  let output = {};
  for (let letter of noSpaces) {
    if (letter in output) {
      output[letter]++;
    } else {
      output[letter] = 1;
    }
  }
  console.log(output);
};

module.exports = countLetters;

// countLetters('abbcccddddeeeee');
// countLetters('a quick brown fox jumps over the lazy dog');