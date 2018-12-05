'use strict';

// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
//
// rl.question('Enter 1st integer: ', (answer) => {
//   console.log('Entered:', answer);
//   rl.close();
// });

// for (let j = 0; j < process.argv.length; j++) {
//   console.log(`${j} -> ${process.argv[j]}`);
// }
//
// if (process.argv.length !== 2) {
//   console.log('foo');
//   console.log(process.argv.length);
// }

/*
Example Usage: range(1, 6, 2) -> [1, 2, 5]
*/

const range = (m, n, o = 1) => {
  const arr = [];
  if (m <= n) {
    while (m <= n) {
      arr.push(m);
      m += o;
    }
  } else if (m > n) {
    if (o < 0) o = -o;
    while (m >= n) {
      arr.push(m);
      m -= o;
    }
  }
  return arr;
};

const sum = (array) => {
  let total = 0;
  array.forEach(i => total += i);
  return total;
};


module.exports = {
  range,
  sum,
};

if (require.main === module) {
  console.log(sum(range(1, 10)));
}
