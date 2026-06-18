const { test } = require('node:test');
const assert = require('node:assert/strict');
const { sum } = require('./sum');

test('sum of numbers', () => {
  assert.equal(sum([1, 2, 3]), 6);
});

test('sum of empty array', () => {
  assert.equal(sum([]), 0);
});

test('sum with no argument', () => {
  assert.equal(sum(), 0);
});

test('sum of floats', () => {
  assert.equal(sum([1.5, 2.5]), 4);
});
