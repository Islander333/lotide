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




const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};



//implement function that takes 2 objects and returns true or false
//return true if perfectly matched, otherwise return false
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



//some tests
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false

//some more testing with assertEqual
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false

assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);