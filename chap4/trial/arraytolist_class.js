'use strict';

const arraytolist = (arr) => arr;

const TYPES = {
  undefined: 'undefined',
  number: 'number',
  boolean: 'boolean',
  string: 'string',
  '[object Function]': 'function',
  '[object RegExp]': 'regexp',
  '[object Array]': 'array',
  '[object Date]': 'date',
  '[object Error]': 'error',
};

let TOSTRING = Object.prototype.toString;

function checkType(obj) {
  return TYPES[typeof obj] || TYPES[TOSTRING.call(obj)] || (obj ? 'object' : 'null');
}

class Node {
  constructor(element) {
    // check type
    const type = checkType(element);

    if ((type === 'string') || (type === 'number')) {
      console.log('string or number');
      this.value = element;
      this.rest = null;
    } else if (type === 'array') {
      console.log('array');
      let current = {};
      this.value = null;
      this.addElement(element);

      addElement(element) {
        const newNode = { value };
        return this;
      }

      for (let i of element) {
        console.log(i);
        this.value = element;
        this.rest = null;
        current = this;
        console.log(current);
      }
    } else {
      console.log('non-valid input');
    }
  }
}

const list1 = new Node([1, 2]);
// const list1 = new Node(1);
// const list1 = new Node('hi');
// const list1 = new LinkedList('hi');

// console.log(arraytolist([1, 2]));
console.log(list1);
