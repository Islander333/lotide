const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

//test code
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);