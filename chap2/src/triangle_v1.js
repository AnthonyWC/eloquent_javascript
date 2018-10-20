'use strict';

/*
Original version
 */

function draw(k) {
  let square = '#';

  while (square.length <= k) {
    console.log(square);
    square += '#';
  }
}

draw(7);

// module.exports = draw;
