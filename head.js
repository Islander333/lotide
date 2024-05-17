//function implementation
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

//test code
assertEqual("Lighthouse Labs", "mista white");
assertEqual(1, 1);


//function implementation

const head = function(arr) {
  return arr[0];
};

//test code

console.log(head([1]));