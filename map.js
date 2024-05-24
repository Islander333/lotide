

//map function implementation
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  
  }
  return results;
};
//words array to loop through
const words = ["ground", "control", "to", "major", "tom"];

//add assertArraysEqual and eqArrays functions for testing

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};




const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${array1} !== ${array2}`);
  }
};


//test code

const wordLengths = map(words, word => word.length);
const realWordLengths = [6, 7, 2, 5, 3];
assertArraysEqual(wordLengths, realWordLengths);


const uppercaseWords = map(words, word => word.toUpperCase());
const realUppercaseWords = ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"];
assertArraysEqual(uppercaseWords, realUppercaseWords);