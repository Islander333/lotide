const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

//implent countLetters function

const countLetters = function(sentence) {
  const results = {};
  for (const letter of sentence) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }  
  }
  return results;
};

//test cases

const result1 = countLetters("Hello");

console.log(result1);
(assertEqual(result1["l"], 2));
assertEqual(result1["e"], 1);