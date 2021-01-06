const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌️ Assertion Failed: ${actual} !== ${expected}`);
  }
};


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

countLetters('abbcccddddeeeee');
countLetters('a quick brown fox jumps over the lazy dog');