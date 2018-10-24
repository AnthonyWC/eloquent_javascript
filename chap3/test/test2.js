import test from 'ava';

const isEven = require('../src/recursion');

test('check parity', (t) => {
  t.is(isEven(1), false);
  t.is(isEven(2), true);
  t.is(isEven(-1), false);
  t.is(isEven(-2), true);
  t.is(isEven(3.14), 'non-integer');
  t.is(isEven('foo'), 'non-integer');
});
