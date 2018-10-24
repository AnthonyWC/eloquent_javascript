'use strict';

const countChar = (l, match = 'B') => {
  if ((typeof l === 'string') && (typeof match === 'string') && (match.length === 1)) {
    const string = l.split('');
    let count = 0;
    string.forEach((v) => {
      if (v === match) {
        count += 1;
      }
    });
    return count;
  }
  return false;
};

const countBs = countChar;
console.log(countBs('BbAaaA10+=/"!?'));
console.log(countChar('BbAaaA10+=/"!?', 'A'));

module.exports = {
  countBs,
  countChar,
};
