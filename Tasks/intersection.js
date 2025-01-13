// Refactor following solution
// Find an intersection of two dictionaries

'use strict';

const intersection = (object1, object2) => {
  const crossing = {};

  for (const key of Object.keys(object1)) {
    if (object1[key] === object2[key]) {
      crossing[key] = object1[key];
    }
  }
  return crossing;
};

module.exports = intersection;
