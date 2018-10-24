'use strict';

const checkInt = (x) => {
  const reg1 = /^(-?[1-9]+|-?\d+)$/;
  const reg2 = /^([1-9]+|\d+)$/;
  return ((typeof x === 'number') && reg1.test(x)) // eslint-disable-line no-nested-ternary
    ? (reg2.test(x))
      ? x
      : -x
    : false;
};

const chkEven = x => (
  (x === 0) // eslint-disable-line no-nested-ternary
    ? true
    : (x === 1)
      ? false
      : chkEven(x - 2));

// main
const isEven = (x) => {
  x = checkInt(x); // eslint-disable-line no-param-reassign
  return (x)
    ? chkEven(x)
    : 'non-integer';
};

module.exports = isEven;

if (require.main === module) {
  console.log(isEven(-7));
}
