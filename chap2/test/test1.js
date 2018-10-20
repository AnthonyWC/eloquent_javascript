import test from 'ava';

const draw = require('../src/triangle');

test('print triangle', (t) => {
  t.is(draw(1), '#');
  t.is(draw(2), '#\n##');
  t.is(draw(7), '#\n##\n###\n####\n#####\n######\n#######');
});
