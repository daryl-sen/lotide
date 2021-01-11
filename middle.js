// const assertEqual = require('./assertEqual');
// const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    let halfwayPoint = array.length / 2 - 1;
    return [array[halfwayPoint], array[halfwayPoint + 1]];
  } else {
    let halfwayPoint = Math.floor(array.length / 2);
    return [array[halfwayPoint]];
  }
};

module.exports = middle;