'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter 1st integer: ', (answer) => {
  console.log('Entered:', answer);
  rl.close();
});

// for (let j = 0; j < process.argv.length; j++) {
//   console.log(`${j} -> ${process.argv[j]}`);
// }
//
// if (process.argv.length !== 2) {
//   console.log('foo');
//   console.log(process.argv.length);
// }

