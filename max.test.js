const { test } = require('node:test');
const assert = require('node:assert/strict');
const { max } = require('./max');

test('max of multiple numbers', () => {
  assert.equal(max([3, 1, 2]), 3);
});

test('max of single number', () => {
  assert.equal(max([5]), 5);
});

test('max of floats', () => {
  assert.equal(max([1.5, 0.5]), 1.5);
});

test('max of empty array returns -Infinity', () => {
  assert.equal(max([]), -Infinity);
});

test('max with no argument returns -Infinity', () => {
  assert.equal(max(), -Infinity);
});
