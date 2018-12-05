import test from 'ava';

import { range, sum } from '../src/sum_range';

test('check sum', (t) => {
  // [, 2, 3, 4, .. 10]
  t.is(sum(range(1, 10)), 55);
  // [1, 3, 5, 7, 9]
  t.is(sum(range(1, 10, 2)), 25);
  // [5, 4, 3, 2]
  t.is(sum(range(5, 2, -1)), 14);
});
