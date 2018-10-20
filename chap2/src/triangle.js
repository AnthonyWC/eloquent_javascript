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

  return line.slice(0, -1);
}

module.exports = draw;

//

if (require.main === module) {
  console.log(draw(7));
}
