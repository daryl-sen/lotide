# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install daryl-sen/lotide`

**Require it:**

`const _ = require('daryl-sen/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(...)`: description
* `function2(...)`: description
* `function3(...)`: description


* `assertArraysEqual()`: checks to see if two arrays are equal
* `assertEqual()`: checks to see if two pieces of primitive data are equal
* `assertObjectsEqual()`: checks to see if two objects are equal
* `countLetters()`: creates a tally of all the letters/characters in a string
* `countOnly()`: creates a tally of all the specified characters only
* `eqArrays()`: helper function for assertArraysEqual
* `eqObjects()`: helper function for assertObjectsEqual
* `findKey()`: find a key that satisfies a callback function (returns true)
* `findKeyByValue()`: find the key in an object that corresponds to a value
* `flatten()`: flattens an array of arrays into a single-level array
* `head()`: returns the first element in an array
* `letterPositions()`: returns the indices where each letter appears
* `map()`: creates a new array based on an old array
* `middle()`: returns the middle element in an array as an array
* `tail()`: returns an array without the first element
* `takeUntil()`: keep collecting items from a provided array until the callback provided returns a truthy value.
* `without()`: return a subset of a given array, removing unwanted elements