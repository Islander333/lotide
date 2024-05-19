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

const middle = function(arr) {
  const length = arr.length;
  if (length <= 2) {
    return [];
  } if (length % 2 !== 0) {
    const mid = Math.floor(length / 2);
    return [arr[mid]];
  }
  const mid1 = (length / 2) - 1;
  const mid2 = length / 2;
  return [arr[mid1], arr[mid2]];
};
  
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);