const assertEqual = function(actual, expected) {
  if (actual.length !== expected.length) {
    return `❌️ Assertion Failed: [${actual}] and [${expected}] have different lengths.`;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return `❌️ Assertion Failed: [${actual}] !== [${expected}]`;
      }
    }
    return `👍️ Assertion Passed: [${actual}] === [${expected}]`;
  }
};

const tail = function(array) {
  if (array !== []) {
    const newArray = array.slice(1);
    return newArray;
  }
};


console.log(assertEqual(tail([4,5,6,7]), [5,6,7]));
console.log(assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]));
console.log(assertEqual(tail([]), []));