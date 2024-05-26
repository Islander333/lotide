const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

//function implementation

const findKey = (object, callback) => {
  //get the keys of object
  const keys = Object.keys(object);
  //loop through the keys
  for (const key of keys) {
    //return key if callback finds true value
    if (callback(object[key])) {
      return key;
    }
  } 
  //return undefined if no truthy is found
  return undefined;
};



//calling the function with tests
const test1 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"

console.log(test1);

const test2 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 3
); 

console.log(test2);

//testing with assertEqual
assertEqual(test1, "noma");
assertEqual(test2, "Akaleri");