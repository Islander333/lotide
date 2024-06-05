const eqArrays = require("./eqArrays");

const assertArraysEqual = require("./assertArraysEqual");

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
  module.exports = middle;