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
  const lowercaseName = name.toLowerCase();

  for (const shortName of MONTHS) {
    if (lowercaseName.startsWith(shortName)) {
      return MONTHS.indexOf(shortName) + 1;
    }
  }

  return -1;
};

module.exports = getMonthName;
