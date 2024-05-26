const takeUntil = function(array, callback) {
  // ...
  //initialize empty array to return
  let results = [];
  //loop through the array
  for (const i of array) {
    //if callback returns truthy, end loop
    if (callback(i)) {
      return results;
      //if not, push i to results array
    } else {
      results.push(i);
    }
  }
  //return results once done
  return results;
};



 





//calling the function
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


//testing using eqArrays and assertArraysEqual



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

//...

assertArraysEqual(results1, [1,2,5,7,2]);
assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']);

