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
    eval(getmin(-0.61, 5));
  } catch (err) {
    if (err instanceof ReferenceError) {
      console.log('Reference error');
    } else {
      console.log(err);
    }
  }
}