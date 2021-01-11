// const assertArraysEqual = require('./assertArraysEqual');
// const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// const results1 = map(words, word => word[0]);



// assertArraysEqual(map(words, word => word[0]), ['g','c','t','m','t']);
// assertArraysEqual(map(["yeet", "moot", "c", "a"], word => word[0]), ['y','m','c','a']);
// assertArraysEqual(map(["123", "321", "456", "654"], word => word[0]), ['1','3','4','6']);






