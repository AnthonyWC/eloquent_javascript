'use strict';

function draw(k, n) {
  const square = '#';
  console.log(square.repeat(n));

  if (n < k) {
    draw(k, n + 1);
  }
}

draw(7, 1);
