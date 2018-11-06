import test from 'ava';

import { range, sum } from '../src/sum_range';

test('check sum', (t) => {
  t.is(sum(range(1, 10)), 55);
  t.is(sum(range(1, 10, 2)), 25);
  t.is(sum(range(5, 2, -1)), 14);
});
