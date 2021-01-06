const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌️ Assertion Failed: ${actual} !== ${expected}`);
  }
};


assertEqual('pepsi', 'coke')
assertEqual('oranges', 'apples')
assertEqual('1', 1)
assertEqual('pizza', 'pizza')
assertEqual(false, 0)
assertEqual(123, 123)