const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let output = {};
  for (let entry in itemsToCount) {
    if (allItems.includes(entry) && itemsToCount[entry]) {
      output[entry] = 0;
      for (let item of allItems) {
        if (item === entry) {
          output[entry]++;
        }
      }
    }
  }
  // console.log(output);
  return output;
};





// test drivers


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);