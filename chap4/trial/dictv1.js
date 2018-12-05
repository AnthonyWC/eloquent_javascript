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

class LinkedList {
  constructor(value) {
    this.head = null;
    // this.length = 0;
    this.addToHead(value);
  }

  addToHead(value) {
    const newNode = { value }; // 1
    newNode.next = this.head; // 2
    this.head = newNode; // 3
    // this.length++;
    return this;
  }
}

const list = new LinkedList('first')
  .addToHead('second')
  .addToHead('third');

// console.log(list);
console.log('First: ', util.inspect(list, { showHidden: false, depth: null }));

console.log('\n***** Listv2 *****\n');

// ***********************************

class LinkedListv2 {
  constructor(value) {
    console.log('+++++++++++');
    this.value = null;
    console.log('initial this: '.bgMagenta, this);
    // this.length = 0;
    this.addToHead(value);
  }

  addToHead(value) {
    // create object with value operty
    console.log('** Starting addtoHead; value: **'.green, value);
    console.log('this: ', this);
    const newNode = { value };
    console.log('** After: const newNode = { value }'.red);
    console.log('newNode: ', newNode);

    // this.head points to the newly created node
    // (both newNode.next & this.head points to same reference)
    newNode.next = this.value; // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    console.log('\n** After: newNode.next = this.value'.red);
    console.log('newNode ', newNode);

    console.log('***********');
    this.value = newNode;
    console.log('\n** After: this.value = newNode **'.red);
    console.log('final this: '.blue, this);
    console.log('this.value: ', this.value);
    // this.length++;
    return this;
  }
}

// const list2 = new LinkedListv2('first');

const list2 = new LinkedListv2('first')
  .addToHead('second');
console.log('Final: ', list2);


/*
// const list3 = new LinkedListv2('first').addToHead('second').addToHead('third');
const list3 = new LinkedListv2('first');
list3.addToHead('second');
console.log('%%%%%%%%%%%');
list3.addToHead('third');

console.log('Final: ', util.inspect(list3, { showHidden: false, depth: null }));
*/

/* Result

Final:  LinkedListv2 {
  value: { value: 'second', next: { value: 'first', next: null } } }

 */

console.log('\n***** Third ******'.bgRed);

class LinkedListv3 {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  addToHead(value) {
    // create object with value operty
    console.log('** Starting addtoHead; value: **'.green, value);
    console.log('this: ', this);
    const newNode = { value };
    console.log('** After: const newNode = { value }'.red);
    console.log('newNode: ', newNode);

    // this.head points to the newly created node
    // (both newNode.next & this.head points to same reference)
    console.log('this.value '.bgBlue, this.value);

    let tempNode = {};

    for (const k in this) {
      console.log('Testing: ', k, this[k]);
      temNode{ k } = this[k];
    }
    // newNode.next = Object.assign(newNode.next, this);
    console.log('\n** After: newNode.next = this.value'.red);
    console.log('newNode ', newNode);

    console.log('* Change *');
    this.value = newNode;
    console.log('\n** After: this.value = newNode **'.red);
    console.log('final this: '.blue, this);
    console.log('this.value: ', this.value);
    // this.length++;
    return this;
  }
}

/*
class LinkedListv3 {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  addToHead(value) {
    // create object with value operty
    console.log('\n** Starting addtoHead; value: **'.blue, value);
    // this holds current value
    console.log('this: ', this);
    const newNode = { value };
    const currentNode = { value: this };
    console.log(currentNode);

    console.log('** After: const newNode = { value }'.red);
    console.log('newNode: ', newNode);

    // this.head points to the newly created node
    // (both newNode.next & this.head points to same reference)
    newNode.next = this.value;
    // console.log('\n** After: newNode.next = this.value'.red);
    // console.log('this: ', this);
    // console.log('newNode ', newNode);
    //
    // console.log('*?*?*?*?*');
    // // this.value = newNode;
    // this.value = value;
    // this.next = this.value;
    //
    // console.log('\n** After: (code change) **'.red);
    // // console.log('\n** After: this.value = newNode **'.red);
    // console.log('this: ', this);
    // console.log('this.value: ', this.value);

    console.log('** Ending addtoHead; value: **'.yellow, value);
    return this;
  }
}
*/

const list3 = new LinkedListv3('first');
console.log('Third: ', util.inspect(list3, { showHidden: false, depth: null }));

console.log('***********\n');

const list4 = new LinkedListv3('first')
  .addToHead('second')
  .addToHead('third');

console.log('Fourth: ', util.inspect(list4, { showHidden: false, depth: null }));
