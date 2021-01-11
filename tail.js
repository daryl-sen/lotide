// const assertArraysEqual = require('./assertArraysEqual');

const tail = function(array) {
  if (array !== []) {
    const newArray = array.slice(1);
    return newArray;
  }
};

module.exports = tail;