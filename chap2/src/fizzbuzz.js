// 'use strict';

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

  let line = '';

  while (i <= n) {
    if (divide(i, 3) && divide(i, 5)) {
      line = `${line}FizzBuzz\n`;
      // console.log('FizzBuzz');
    } else if (divide(i, 3)) {
      line = `${line}Fizz\n`;
      // console.log('Fizz');
    } else if (divide(i, 5)) {
      line = `${line}Buzz\n`;
      // console.log('Buzz');
    } else {
      line = `${line + i}\n`;
      // console.log(i);
    }
    i += 1;
  }

  return line.slice(0, -1);
};

// requires babel (npm run build)
export { fizzbuzz };

if (require.main === module) {
  console.log(fizzbuzz(100));
}