'use strict';

function addElement(indict, value) {
  // add new value
  const newdict = { value };

  if (Object.keys(indict).length === 0) {
    newdict.rest = null;
  } else {
    newdict.rest = indict;
  }
  return newdict;
}


function arrayToList(arr = [1, 2, 3]) {
  let dict = { };
  const array = arr.reverse();

  for (const e of array) {
    dict = addElement(dict, e);
  }

  return dict;
}

/* eslint-disable */
let dList = { value: 1, rest: {
    value: 2, rest: {
      value: 3,
      rest: null,
    }
  }
};
/* eslint-disable */


function listToarray(linkList = dList) {
  let list = [];
}

console.log(arrayToList());
