import test from 'ava';

const getmin = require('../src/min');

test('return min from 2 integers', (t) => {
  t.is(getmin(1, 2), 1);
  t.is(getmin(-2, 1), -2);
});
