const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `👍️ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `❌️ Assertion Failed: ${actual} !== ${expected}`;
  }
};


console.log(assertEqual('pepsi', 'coke'));
console.log(assertEqual('oranges', 'apples'));
console.log(assertEqual('1', 1));
console.log(assertEqual('pizza', 'pizza'));
console.log(assertEqual(false, 0));
console.log(assertEqual(123, 123));