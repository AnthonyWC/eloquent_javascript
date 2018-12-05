'use strict';

/**
 * @author  Anthony Cheng
 */

const util = require('util');

/* eslint-disable */
const dList = {
  value: 1, rest: {
    value: 2, rest: {
      value: 3,
      rest: null,
    }
  }
};
/* eslint-disable */

/**
 * checkObject: Check if Object is array or dictionary (non Date type)
 *
 * @param { null/string/Object } value Check if it is an object and get its type
 * @returns { string/Boolean } Returns either a string that represents the value Type or False
 */
function checkObject(value) {
  if (typeof value === 'object' && value !== null) {
    if (value instanceof Array) {
      return 'Array';
    } else if (!(value instanceof Date)) {
      return 'Object';
    } else {
      return false;
    }
  }

  return false;
}

/**
 * flog: Display nested object
 * @requires     NPM:util
 *
 * @param { Object } obj
 * @returns { Object } Returns either a string that represents the value Type or False
 */
function flog(obj) {
  return util.inspect(obj, { showHidden: false, depth: null });
}

/**
 * prepend: Prepend element to start of linked list
 *
 * @param { Object } llist Original linked list
 * @param { String/number } value Element to add to linked list
 * @returns { Object } Returns new linkded list
*/
function prepend(llist, value) {
  // add new value
  const newllist = { value };
  if (Object.keys(llist).length === 0) {
    newllist.rest = null;
  } else {
    newllist.rest = llist;
  }
  return newllist;
}

/**
 * arrayToList: Convert array to linked list
 *
 * @param { Array } arr
 * @returns { Object } Returns linked list
 */
function arrayToList(arr = [1, 2, 3]) {
  let dict = {};

  if (checkObject(arr) !== 'Array') {
    return false;
  }

  const array = arr.reverse();

  for (const e of array) {
    dict = prepend(dict, e);
  }

  return dict;
}


/**
 * listToarray: Convert linked list to array
 *
 * @param { Object } llink linked list
 * @returns { array } Returns array
 */
function listToarray(llink = dList) {
  const array = [];
  while (llink) {
    // console.log(llink.value);
    array.push(llink.value);
    llink = llink.rest;
  }
  return array;
}

/**
 nth: [llist], number => element
 */
const nth = (llist, number) => {
  let index = 0;

  while (llist) {
    if (index !== number) {
      index += 1;
    } else {
      return llist.value;
    }

    llist = llist.rest;
  }

  return undefined;
};

const list4 = arrayToList([1, 2, 3, 4]);
console.log(list4);
console.log(listToarray(list4));
console.log(flog(prepend(list4, 0)));
console.log(nth(dList, 3));
