const assertObjectsEqual = require('../assertObjectsEqual');

assertObjectsEqual({1:1, 2:2}, {1:1, 2:2});
assertObjectsEqual({1:1, 2:3}, {1:1, 2:2});
assertObjectsEqual({1:1, 2:2}, {1:1, 2:"2"});