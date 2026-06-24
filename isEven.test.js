const { test } = require('node:test');
const assert = require('node:assert/strict');
const { isEven } = require('./isEven');

test('isEven returns true for even number', () => {
  assert.equal(isEven(4), true);
});

test('isEven returns false for odd number', () => {
  assert.equal(isEven(3), false);
});

test('isEven returns true for zero', () => {
  assert.equal(isEven(0), true);
});

test('isEven returns true for negative even number', () => {
  assert.equal(isEven(-2), true);
});

test('isEven returns false for negative odd number', () => {
  assert.equal(isEven(-1), false);
});
