import test from 'ava';

import { chess } from '../src/chess_v1';

test('chess', (t) => {
  t.is(chess(1, 1), '| |');
  t.is(chess(2, 2), '| #|\n|# |');
  t.is(chess(3, 3), '| # |\n|# #|\n| # |');
  t.is(chess(2, 4), '| # #|\n|# # |');
});
