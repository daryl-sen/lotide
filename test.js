const letterPositions = function(sentence) {
  nospace = sentence.split(' ').join('');
  let results = {};
  
  for (let i = 0; i < nospace.length; i++) {
    if (results[nospace[i]]) {
      results[nospace[i]].push(i)
    }
    else {
      results[nospace[i]] = [i]
    }
  }
  
  return results;
};

console.log(letterPositions("lighthouse in the house"))