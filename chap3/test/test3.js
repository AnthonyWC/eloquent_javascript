import test from 'ava';

import { countBs, countChar } from '../src/bean';

test('check parity', (t) => {
  t.is(countBs('12345'), 0);
  t.is(countBs('BaB'), 2);
  t.is(countBs(33), false);
  t.is(countChar('BaB', 'c'), 0);
  t.is(countChar('BaB12341?!', '1'), 2);
  t.is(countChar('BaB12341?!', 'foo'), false);
});
