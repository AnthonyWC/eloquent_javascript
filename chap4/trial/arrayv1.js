'use strict';

function isDict(v) {
  return typeof v === 'object' && v !== null && !(v instanceof Array) && !(v instanceof Date);
}

function checkObject(v) {
  if (typeof v === 'object' && v !== null) {
    if (v instanceof Array) {
      return 'Array';
    } else if (!(v instanceof Date)) {
      return 'Object';
    } else {
      return false;
    }
  }

  return false;
}

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};

const list2 = {};

function checkLList(current) {
  const array = [];
  while (current) {
    // console.log(current.value);
    array.push(current.value);
    current = current.rest;
  }
  return array;
}

const array1 = [1, 2, 3];
var dobj = new Date();

console.log(checkLList(list));
console.log(list);
console.log(isDict(list));
console.log(isDict(array1));
console.log(checkObject(list2));

/**
 * prepend: Prepend element to start of array
 *
 * @param { string/number } element
 * @param { Array } array
 * @returns { Array } array
 */
function prepend(element = 0, array = [1, 2]) {
  let newarray = JSON.parse(JSON.stringify(array));
  newarray.unshift(element);
  return newarray;
}

/**
 nth: [list], number => element
 */
const nth = (array, index) => {
  let newarray = JSON.parse(JSON.stringify(array));
  return newarray.splice(index, 1);
};
