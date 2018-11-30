'use strict';

const colors = require('colors');
const util = require('util');

/*
 head: {
   value: 'third',
   next: {
    value: 'second',
    next: [Object]
   }
  }
 }
 */

const dict = { };

function addElement(indict, value) {
  // add new value
  const newdict = { value };
  // console.log(newdict);

  if (Object.keys(indict).length === 0) {
    newdict.rest = null;
  } else {
    newdict.rest = indict;
  }
  return newdict;
}

let dict1 = {};
dict1 = addElement(dict1, 1);
console.log('First: ', util.inspect(dict1, { showHidden: false, depth: null }));

console.log('**************');
dict1 = addElement(dict1, 2);
console.log('Second: ', util.inspect(dict1, { showHidden: false, depth: null }));

console.log('**************');
dict1 = addElement(dict1, 3);
console.log('Third: ', util.inspect(dict1, { showHidden: false, depth: null }));

console.log('**************');

/*

// The following doesn't work
function addElement2(indict, value) {
  let origdict = indict;
  const newdict = { value };
  newdict.rest = null;
  console.log(origdict);

  console.log('**************'.red);
  if (Object.keys(indict).length === 0) {
    console.log('length 0');
    origdict = newdict;
  } else {
    console.log('non-zero length');
    console.log(indict);
    // need to transverse nested next
    indict.rest = newdict;
  }
  return origdict;
}

let dict2 = addElement2(dict, 1);
dict2 = addElement2(dict2, 2);
console.log('**************'.blue);
dict2 = addElement2(dict2, 3);
console.log('New: ', util.inspect(dict2, { showHidden: false, depth: null }));

*/
