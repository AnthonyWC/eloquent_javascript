import test from 'ava';

const draw = require('../triangle');

test('print triangle', (t) => {
  t.is(draw(1), '#\n');
  t.is(draw(2), '#\n##\n');
  t.is(draw(7), '#\n##\n###\n####\n#####\n######\n#######\n');
});
