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

//implement letterPositions function

const letterPositions = function(sentence) {
  const results = {};
  //loop through sentence with for loop to get index
  for (let i = 0; i < sentence.length; i++) {
    //get letter at each index
    const letter = sentence[i];
    /* check if each letter is already in results. if yes, add current index to list
    of indexes for that letter. if not, add current index to start list*/

    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  //return results object
  return results;
};


//test cases
console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2,3]);