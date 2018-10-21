import test from 'ava';

import { fizzbuzz } from '../babel/src/fizzbuzz';

test('fizzbuzz', (t) => {
  t.is(fizzbuzz(1), '1');
  t.is(fizzbuzz(7), '1\n2\nFizz\n4\nBuzz\nFizz\n7');
});
