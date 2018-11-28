'use strict';

const colors = require('colors');

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

// ***********************************

class LinkedListv2 {
  constructor(value) {
    console.log('+++++++++++');
    this.value = null;
    console.log('this: ', this);
    // this.length = 0;
    this.addToHead(value);
  }

  addToHead(value) {
    // create object with value operty
    console.log('** Starting addtoHead; value: **'.blue, value);
    const newNode = { value };
    console.log('** After: const newNode = { value }'.red);
    console.log('newNode: ', newNode);

    // this.head points to the newly created node
    // (both newNode.next & this.head points to same reference)
    newNode.next = this.value;
    console.log('\n** After: newNode.next = this.value'.red);
    console.log('this: ', this);
    console.log('newNode ', newNode);
    console.log('newNode.next: ', newNode.next);

    console.log('***********');
    this.value = newNode;
    console.log('\n** After: this.value = newNode **'.red);
    console.log('this: ', this);
    console.log('this.value: ', this.value);
    // this.length++;
    return this;
  }
}

// const list2 = new LinkedListv2('first');
/*
const list2 = new LinkedListv2('first')
  .addToHead('second');
console.log('Final: ', list2);
*/

// const list3 = new LinkedListv2('first').addToHead('second').addToHead('third');
const list3 = new LinkedListv2('first');
list3.addToHead('second');
list3.addToHead('third');

console.log('***********');
console.log('Final: ', list3);
