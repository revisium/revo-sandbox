const { test } = require('node:test');
const assert = require('node:assert/strict');
const { min } = require('./min');

test('min of multiple numbers', () => {
  assert.equal(min([3, 1, 2]), 1);
});

test('min of single number', () => {
  assert.equal(min([5]), 5);
});

test('min of floats', () => {
  assert.equal(min([1.5, 0.5]), 0.5);
});

test('min of empty array returns Infinity', () => {
  assert.equal(min([]), Infinity);
});

test('min with no argument returns Infinity', () => {
  assert.equal(min(), Infinity);
});
