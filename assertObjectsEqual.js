const eqObjects = function(object1, object2) {
  //get keys of both objects
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  //check if # of keys are same
  if (keys1.length !== keys2.length) {
    return false;
  } 
  //loop through keys of object1
  for (const key of keys1) {
  //get values of both objects
    const val1 = object1[key];
    const val2 = object2[key];
    //check if both values are arrays
    //if they are, check if they're equal
    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!eqArrays(val1, val2)) {
        return false;
      }
    //check if val1 and val2 are perfectly equal, if not return false
    } else if (val1 !== val2) {
      return false;
    }
  }
  //if both objects passed all tests/ are perfect match, return true
  return true;
};

//implement assertObjectsEqual function
const assertObjectsEqual = function(actual, expected) {
  //use util library inspect function
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    //modify console logs to make use of insepct function
    console.log(`✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//test

const bob = {age: 37, height: 6, drip: "none"};
const harold = {age: 37, height: 6, drip: "none"};
assertObjectsEqual(bob, harold);