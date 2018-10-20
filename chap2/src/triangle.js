'use strict';

/*
Testable version
 */

function draw(k) {
  let square = '#';
  let line = '';

  while (square.length <= k) {
    line = `${line + square}\n`;
    square += '#';
  }

  return line;
}

module.exports = draw;

//
console.log(draw(7));
