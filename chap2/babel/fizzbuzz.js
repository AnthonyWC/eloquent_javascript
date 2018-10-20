"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fizzbuzz = void 0;

// 'use strict';

/*
Testing for ES6 syntax
 */
var fizzbuzz = function fizzbuzz(n) {
  var i = 1;

  var divide = function divide(k, div) {
    if (k % div === 0) {
      return true;
    }

    return false;
  };

  var line = '';

  while (i <= n) {
    if (divide(i, 3) && divide(i, 5)) {
      line = "".concat(line, "FizzBuzz\n"); // console.log('FizzBuzz');
    } else if (divide(i, 3)) {
      line = "".concat(line, "Fizz\n"); // console.log('Fizz');
    } else if (divide(i, 5)) {
      line = "".concat(line, "Buzz\n"); // console.log('Buzz');
    } else {
      line = "".concat(line + i, "\n"); // console.log(i);
    }

    i += 1;
  }

  return line.slice(0, -1);
}; // requires babel (npm run build)


exports.fizzbuzz = fizzbuzz;

if (require.main === module) {
  console.log(fizzbuzz(100));
}