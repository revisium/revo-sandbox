const { test } = require('node:test');
const assert = require('node:assert/strict');
const { max } = require('./max');

test('larger first value', () => {
  assert.equal(max(5, 3), 5);
});

test('larger second value', () => {
  assert.equal(max(2, 7), 7);
});

test('equal values', () => {
  assert.equal(max(4, 4), 4);
});

test('negative numbers', () => {
  assert.equal(max(-3, -5), -3);
});

test('decimals', () => {
  assert.equal(max(1.5, 2.25), 2.25);
});
