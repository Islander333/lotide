const tail = require("../tail");
const assertEqual = require("../assertEqual");

// Test Case 1: Check the returned array elements
const OGarray = [1,2,3,4];
const ogResult = tail(OGarray);
assertEqual(ogResult.length, 3);
assertEqual(OGarray.length, 4);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"