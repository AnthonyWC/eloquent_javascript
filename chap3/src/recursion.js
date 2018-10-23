'use strict';

const checkInt = (x) => {
  const reg1 = /^(-?[1-9]+|-?\d+)$/;
  const reg2 = /^([1-9]+|\d+)$/;
  return ((typeof x === 'number') && reg1.test(x))
    ? (reg2.test(x))
      ? x
      : -x
    : false;
};

const chkEven = x => (
  (x === 0)
    ? true
    : (x === 1)
      ? false
      : chkEven(x - 2));

// main
const isEven = (x) => {
  x = checkInt(x);
  return (x)
    ? chkEven(x)
    : 'non-integer';
};

console.log(isEven(6));
