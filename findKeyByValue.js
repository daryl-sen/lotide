const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌️ Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function(showsList, specificShow) {
  let output; // if unchanged, output will be undefined
  for (const key in showsList) {
    // console.log(key, showsList[key]);
    if (specificShow === showsList[key]) {
      output = key;
    }
  }
  // console.log(output);
  return output;
}




// test drivers

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);