'use strict';

/*
Testing for ES6 syntax
 */

const fizzbuzz = (n) => {
  let i = 1;
  const divide = (k, div) => {
    if (k % div === 0) {
      return true;
    }
    return false;
  };

  while (i <= n) {
    if (divide(i, 3) && divide(i, 5)) {
      console.log('FizzBuzz');
    } else if (divide(i, 3)) {
      console.log('Fizz');
    } else if (divide(i, 5)) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
    i += 1;
  }
};

// requires babel
// export default fizzbuzz;

fizzbuzz(10);
