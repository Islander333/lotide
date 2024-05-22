const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

//implent countLetters function

const countLetters = function(sentence) {
  //create results object to hold # of each letter
  const results = {};
  //loop through sentence
  for (const letter of sentence) {
    //check if each letter is in results. if it is, add 1, if not, =1
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }  
  }
  //return the results object
  return results;
};

//test cases

const result1 = countLetters("Hello");

console.log(result1);
(assertEqual(result1["l"], 2));
assertEqual(result1["e"], 1);