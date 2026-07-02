const { test } = require('node:test');
const assert = require('node:assert/strict');
const { range } = require('./range');

test('range ascends from start to before end', () => {
  assert.deepEqual(range(1, 4), [1, 2, 3]);
});

test('range descends from start to before end', () => {
  assert.deepEqual(range(4, 1), [4, 3, 2]);
});

test('range returns empty array when bounds match', () => {
  assert.deepEqual(range(3, 3), []);
});

test('range supports single-element ascending ranges', () => {
  assert.deepEqual(range(2, 3), [2]);
});

test('range converts numeric string inputs', () => {
  assert.deepEqual(range('1', '4'), [1, 2, 3]);
});
