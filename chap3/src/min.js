'use strict';

function isInt(value) {
  const er = /^(-?[1-9]+|-?\d+\.\d+)$/;
  return ((typeof value === 'number') && (er.test(value)));
}

function getmin(i, j) {
  if (isInt(i) && isInt(j)) {
    return Math.min(i, j);
  }
  return false;
}

if (require.main === module) {
  try {
    console.log(getmin(8, 7));
  } catch (err) {
    if (err instanceof ReferenceError) {
      console.log('Reference error');
    } else {
      console.log(err);
    }
  }
}

module.exports = getmin;
