# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @kyle.lindsay33/lotide`

**Require it:**

`const _ = require('@kyle.lindsay33/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `function1(eqArrays)`: Asserts that two arrays are equal
- `function2(assertArraysEqual)`: Asserts that two arrays are perfectly equal using eqArrays
- `function4(eqObjects)`: Asserts that two objects are equal
- `function5(assertObjectsEqual)`: Asserts that two objects are perfectly equal using eqObjects
- `function6(countLetters)`: Counts number of letters in a given string
- `function7(countOnly)`: Returns count of specified items from an array using an object
- `function8(findKey)`: Returns first key in an object that is truthy
- `function9(findKeyByValue)`: Returns key matching inputted value
- `function10(flatten)`: Takes a multi-nested array and flattens it to a single array
- `function11(head)`: Takes an array and returns first element of said array
- `function12(letterPositions)`: checks indices of specified letter in a given string
- `function13(map)`: iterates over each element in an array and executes a callback function for each element
- `function14(middle)`: returns the middle element of an array
- `function15(tail)`: returns the tail end of an array, skips the first index
- `function16(takeUntil)`: takes element from an array until a callback returns truthy
- `function17(without)`: takes source and itemsToRemove parameters, removing items from source that are also in itemsToRemove
