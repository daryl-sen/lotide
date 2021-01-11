// const assertEqual = const assertEqual = require('./assertEqual');

const findKey = (object, callback) => {
  for (const item in object) {
    // console.log(object[item].stars);
    if (callback(object[item])) {
      return item;
    }
  }
}

module.exports = findKey;

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), 'noma');