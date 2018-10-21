'use strict';

function isInt(value) {
  const er = /^[1-9][0-9]*$/;
  return ((typeof value === 'number') && (er.test(value)));
}

function chess(l, w) {
  if (!(isInt(l) && isInt(w))) {
    console.log('Must input positive integer');
    return false;
  }

  const div = Math.floor(w / 2);
  const rem = w % 2;
  const oddLine  = `|${' #'.repeat(div)}${' '.repeat(rem)}|\n`; // eslint-disable-line
  const evenLine = `|${'# '.repeat(div)}${'#'.repeat(rem)}|\n`;
  let line = '';

  for (let i = 1; i <= l; i++) {
    if (i % 2 === 1) {
      line += oddLine;
    } else {
      line += evenLine;
    }
  }

  return line;
}

console.info(chess(8, 8));
