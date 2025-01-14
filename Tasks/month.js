// Refactor following solution
// Get month number

'use strict';

const Months = [
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

const Month = (s) => {
  for (const i of Months) {
    if (s.toLowerCase().startsWith(i)) {
      return Months.indexOf(i) + 1;
    }
  }
  return -1;
};

module.exports = Month;
