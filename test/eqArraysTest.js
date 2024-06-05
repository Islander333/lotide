const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

//test code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1,2,3], [3,2,1]), true);
assertEqual(eqArrays(["1", "2", "3"], [1, 2, 3]), true);
