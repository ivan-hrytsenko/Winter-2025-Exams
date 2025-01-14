// Refactor following solution
// Get month number

'use strict';

const MONTHS = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const getMonthName = (name) => {
  for (const shortName of MONTHS) {
    if (name.toLowerCase().startsWith(shortName)) {
      return MONTHS.indexOf(shortName) + 1;
    }
  }
  return -1;
};

module.exports = getMonthName;
